import Stripe from "stripe";
import Booking from "../models/Booking.js";

export const stripeWebhooks = async (request, response) => {
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = request.headers["stripe-signature"];

    let event;

    try {
        event = stripeInstance.webhooks.constructEvent(
            request.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
        console.log("✅ Stripe event received:", event);
    } catch (error) {
        return response.status(400).send(`Webhook Error: ${error.message}`);
    }

    try {
        switch (event.type) {
            case "payment_intent.succeeded": {
                const paymentIntent = event.data.object;
                const sessionList = await stripeInstance.checkout.sessions.list({
                    payment_intent: paymentIntent.id
                });

                const session = sessionList.data[0];

                console.log("✅ Full Stripe session object:", session);
                console.log("📌 Metadata:", session?.metadata);

                const { bookingId } = session.metadata;

                console.log("📌 Booking ID extracted:", bookingId);

                const updatedBooking = await Booking.findByIdAndUpdate(
                    bookingId,
                    {
                        isPaid: true,
                        paymentLink: ""
                    },
                    { new: true } // ensures we get the updated document
                );

                console.log("✅ Booking updated in DB:", updatedBooking);
                break;
            }

            default:
                console.log('Unhandled event type:', event.type);
        }

        response.json({ received: true });
    } catch (error) {
        console.error("Webhook processing error:", error);
        response.status(200).send("Internal Server Error");
    }
};
