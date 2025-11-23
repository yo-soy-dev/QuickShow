
# Movie Ticket Booking Website (MERN Stack)

A full‑stack Movie Ticket Booking Platform built using the **MERN stack**, featuring seat selection, user authentication with **Clerk**, admin dashboard for movie & booking management, and background job handling using **Inngest**.

---

## 🚀 Features

### 🎟️ User Features

* User Authentication using **Clerk** (Email, Phone, Social Login)
* Multi‑session / Multi‑profile support via Clerk
* Browse Movies & Showtimes
* Book Tickets with **Interactive Seat Selection**
* Online Payment Integration
* Payment Retry Handling (Seats reserved for 10 minutes)
* Booking confirmation email
* Reminder email before movie time

### 🛠️ Admin Features

* Admin Dashboard
* Add, Edit & Remove Movies
* Manage Bookings
* Trigger Updates & Notifications

### ⚙️ System Features

* Background Jobs & Scheduling using **Inngest**
* Email Notifications:

  * New movie alert to all users
  * Booking confirmation email
  * Reminder email
* Automatic seat release if payment fails/cancels & user does not complete payment within **10 minutes**

---

## 🧩 Tech Stack

### Frontend

* **React.js**
* **TailwindCSS** / CSS
* **Clerk** for auth UI

### Backend

* **Node.js**
* **Express.js**
* **MongoDB** with Mongoose
* **Inngest** for async jobs

### Other Integrations

* Payment Gateway (Stripe / Razorpay)
* Email Service (via Inngest functions)

---

## 📁 Project Structure

```
root/
├── client/        # React frontend
├── server/        # Express backend
├── inngest/       # Inngest job functions
└── README.md
```

---

## 🧪 Features Breakdown (Step‑by‑Step)

### 1️⃣ User Authentication (Clerk)

* Initialize Clerk in React
* Wrap app with ClerkProvider
* Configure Multi‑session login

### 2️⃣ Movie Listing (Frontend + Backend)

* API endpoints to fetch movies
* Admin creates movies from dashboard
* Movies stored in MongoDB

### 3️⃣ Booking Flow

1. User selects movie & showtime
2. User selects preferred seats
3. Backend reserves selected seats temporarily
4. Payment processing begins

### 4️⃣ Payment Handling

* If payment is successful → seats confirmed
* If canceled/failed → seats stay reserved for 10 minutes
* If 10 minutes pass → Inngest job releases seats

### 5️⃣ Email Automation using Inngest

* "New movie added" → broadcast email
* "Booking confirmed" → user email
* "Reminder before show" → user email

---

## 🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/your-repo/movie-ticket-booking.git
cd movie-ticket-booking
```

### Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### Setup environment variables

Create `.env` files in **client** and **server** with:

```
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
MONGO_URI=
JWT_SECRET=
STRIPE_SECRET=
INGGEST_API_KEY=
EMAIL_SERVICE_KEY=
```

---

## ▶️ Running the Project

### Start frontend

```bash
cd client
npm run dev
```

### Start backend

```bash
cd server
npm run dev
```

### Start Inngest Dev Server

```bash
npx inngest dev
```

---

## 📸 Screenshots (Optional)

*Add UI screenshots or GIFs here*

---

## 📌 Future Enhancements

* Movie reviews & ratings
* Coupons system
* Admin analytics dashboard

---

## 🤝 Contributing

Pull requests are welcome! Follow standard PR conventions.

---

## 📜 License

This project is licensed under the MIT License.

---

### 👨‍💻 Developed with ❤️ using MERN + Clerk + Inngest
