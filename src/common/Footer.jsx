import React from 'react'
import FooterLogo from '../assets/image/webp/footer-logo.webp'
import { FOOTER_LIST, LINKS_LIST } from '../utils/helper'
import { FaceBookIcon, InstagramIcon, LinkedinIcon } from '../utils/icons'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div id='solutions' className='bg-dark-blue px-5 pt-[356px] max-xl:pt-[300px] max-lg:pt-[200px] max-md:pt-[150px] -mt-1 max-sm:pt-[96px]'>
        <div className='max-w-[1140px] mx-auto flex justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-10'>
            <a href="/"><img className='max-w-[150px] max-md:max-w-[130px] max-sm:max-w-[120px]' src={FooterLogo} alt="footerLogo" /></a>
            <div className='flex flex-col gap-3.5'>
                <p className='text-base leading-[20px] max-sm:leading-[16px] max-sm:text-center text-white'>Quick Links</p>
                {LINKS_LIST.map((item , index) => (
                    <a key={index} className='text-base leading-[20px] max-sm:text-sm max-sm:leading-[16px] text-light-pink hover:text-sky-blue cursor-pointer max-sm:text-center' href={item.link}>{item.name}</a>
                ))}
                </div>
                <div className='flex flex-col'>
                    <p className='text-base leading-[20px] max-sm:leading-[16px] text-white pb-3 text-whit max-sm:text-sm max-sm:text-center'>Send Us An E-mail</p>
                    <a className='text-base leading-[20px] max-sm:leading-[16px] text-light-pink max-sm:text-center hover:text-sky-blue cursor-pointer' href="mailto:info@echoai.ai">info@echoai.ai</a>
                    <p className='text-base leading-[20px] max-sm:leading-[16px] pt-8 text-white max-sm:text-sm max-sm:text-center'>Follow Us On</p>
                    <div className='flex gap-3 pt-[18px]'>
                        <a className='hover:scale-110 transition-all duration-300' target='_blank' href="https://www.linkedin.com/feed/"><LinkedinIcon/></a>
                        <a className='hover:scale-110 transition-all duration-300' target='_blank' href="https://www.instagram.com/"><InstagramIcon/></a>
                        <a className='hover:scale-110 transition-all duration-300' target='_blank' href="https://www.facebook.com/"><FaceBookIcon/></a>
                    </div>
                </div>
        </div>
        <div className='flex max-w-[1140px] pb-[30px] flex-col pt-[60px] mx-auto'>
            <div className='bg-footer-line h-0.5 w-full'></div>
                <p className='text-white text-center pt-5 leading-[150%] max-sm:text-sm'>Copyright ECHO AI © {year} | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
