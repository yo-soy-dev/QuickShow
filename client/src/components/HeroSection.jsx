import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { assets } from '../assets/assets'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className='flex flex-col items-start justify-center gap-6 px-6 md:px-16 lg:px-36 h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/backgroundImage.png')` }}>
      <img src={assets.marvelLogo} alt="Marvel Logo" className="max-h-11 lg:h-11 mt-20" />

      <h1 className='text-5xl md:text-[70px] leading-tight font-semibold max-w-[28rem]'>
        Guardians <br /> of the Galaxy
      </h1>
      
      <div className='flex flex-wrap items-center gap-4 text-gray-300 text-sm'>
        <span>Action | Adventure | Sci-Fi</span>
        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4 h-4' /> <span>2018</span>
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4 h-4' /> <span>2h 8m</span>
        </div>
      </div>

      <p className='max-w-md text-gray-300'>
        In a post-apocalyptic world where cities ride on wheels and consume each other to survive,
        two people meet in London and try to stop a conspiracy.
      </p>

      <button
        onClick={() => navigate('/movies')}
        className='flex items-center gap-2 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium text-white'
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  )
}

export default HeroSection
