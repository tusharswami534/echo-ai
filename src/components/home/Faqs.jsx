import React, { useState } from 'react'
import CommonHeading from '../../common/CommonHeading'
import { FAQ_DATA_LIST } from '../../utils/helper'
import { FaqArrow } from '../../utils/icons'

const Faqs = () => {
    const [active , setActive] = useState(0)
    const toggle = (index) => {
        setActive(active === index ? null : index)
    }
  return (
    <div className='py-[105px] bg-dark-blue px-5 max-lg:py-20 max-md:py-16 max-sm:py-12'>
            <CommonHeading customClass={'pb-[60px]'} SectionsHeading={'FAQs'}/>
            <div className='max-w-[1022px] flex flex-col gap-6 mx-auto'>
                {FAQ_DATA_LIST.map((item , index) => (
                    <div key={index} className={`rounded-xl p-6 border border-solid  ${active === index ? 'border-sky-blue' : 'border-white border-opacity-10'}`}>
                        <button onClick={() => toggle(index)} className={`flex w-full text-white justify-between bg-transparent items-center font-medium text-xl max-md:text-lg ${active ===index ? 'pb-4' : ''}`}>{item.heading} <span className={`transition-all duration-300 ${active === index ? 'rotate-180 ' : ''}`}><FaqArrow/></span></button>
                        <p className={`text-white max-md:text-sm overflow-hidden transition-all duration-300 ${active === index ? 'max-h-32' : 'max-h-0'}`}>{item.subHeading}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Faqs
