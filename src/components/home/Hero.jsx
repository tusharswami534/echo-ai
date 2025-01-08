import React from 'react'
import Header from '../../common/Header'
import HeroImage from '../../assets/image/webp/hero-img.webp'
import EllipsisImage from '../../assets/image/webp/hero-ellipsis.webp'
import ResultsAi from './ResultsAi'

const Hero = () => {
  return (
    <div className='overflow-hidden relative -mb-0.5'>
    <div className='bg-hero-image lg:min-h-[840px] bg-bottom bg-no-repeat bg-cover '>
        <Header/>
        <div className='flex justify-center pt-[60px] max-lg:px-5 items-center max-w-[1920px] mx-auto max-lg:flex-col gap-7 max-lg:pt-10 max-md:pt-7'>
            <div className='w-6/12 relative z-30 text-center max-lg:w-full'>
                <h1 className='text-white text-center font-bold text-7xl max-xl:text-6xl max-md:text-5xl max-sm:text-3xl max-sm:leading-8'>Innovate, Automate, Accelerate </h1>
                <p className='text-xl font-normal leading-[30px] max-md:leading-[24px] text-white text-center py-6 max-md:text-lg max-sm:text-base max-lg:py-4 max-sm:py-3'>Next Gen AI AutomationÂ to Scale Your Business.</p>
                <button className='text-xl font-semibold hover:bg-button-gradient-hover transition-all duration-300 text-white text-center py-[19.5px] px-[38px] max-md:py-4 max-md:px-8 max-md:text-lg bg-button-gradient rounded-[57px] '>Book A Call Now!</button>
            </div>
            <div>
              <img className='max-w-[500px] w-full relative z-30 pointer-events-none max-lg:max-w-[400px] object-cover max-md:max-w-[370px] max-sm:max-w-[320px]' src={HeroImage} alt="hero img" />
            </div>
        </div>
        <img className='absolute left-[0%] max-w-[322px] bottom-[0%] max-sm:bottom-[25%]' src={EllipsisImage} alt="EllipsisImage" />
    </div>
        <ResultsAi/>
    </div>
  )
}

export default Hero
