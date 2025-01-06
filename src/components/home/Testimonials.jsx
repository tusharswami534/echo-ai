import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { TESTIMONIALS_LIST } from '../../utils/helper';


const Testimonials = () => {
  return (
    <div className='bg-dark-blue pt-[175px] max-lg:pt-[160px] max-md:pt-[120px] max-sm:pt-[96px] -mb-1 px-5'>
        <div className='max-w-[1140px] mx-auto'>
       <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={24}
        modules={[Pagination, Autoplay]}
        breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1140: {
              slidesPerView: 3,
              centeredSlides: false,
              loop: false
            },
          }}
        className="mySwiper"
      >
        {TESTIMONIALS_LIST.map((item , index) => (
        <SwiperSlide className='max-w-[364px]' key={index}>
            <div className='p-[24px_24px_0px_24px] rounded-3xl bg-linear-gradient max-w-[364px] '>
                <h3 className='text-white pb-[8.39px] text-2xl leading-[28.8px] max-md:leading-[24px] max-lg:text-xl max-md:text-lg'>{item.heading}</h3>
                <p className={`text-white  max-md:text-sm ${index === 2 ? 'pb-6' : 'pb-[47px]'}`}>{item.subHeading}</p>
                <div className='flex gap-2 items-center'>
                    <img className='max-w-[60px]' src={item.profileImage} alt="profileImage" />
                    <div className='flex flex-col'>
                        <h3 className='text-white text-2xl leading-[28.8px] max-md:leading-[24px] max-lg:text-xl max-md:text-lg'>{item.ProfileName}</h3>
                        <p className='text-white max-md:text-sm'>{item.ProfileDesignation}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
