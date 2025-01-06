import React from 'react'
import { RESULTS_AI_LIST } from '../../utils/helper'
import CommonHeading from '../../common/CommonHeading'
import Header from '../../common/Header'

const ResultsAi = () => {
  return (
    <div className='bg-dark-blue -mb-0.5 pt-[58px]'>
        <Header/>
        <div className='max-w-[1138px] mx-auto'>
            <div className='flex max-lg:flex-wrap justify-center gap-y-10 max-md:gap-[30px]'>
                {RESULTS_AI_LIST.map((item , index) => (
                    <div className={`w-4/12 max-lg:w-1/2 max-md:w-full justify-center flex max-md:pr-0 pr-[17px] border-r-liner border-solid   ${index === 1 ? 'max-lg:border-r-0' : index === 2 ? '!border-r-0 max-lg:w-full max-lg:pr-0 ' : ''}`}>
                        <div className='max-w-[365px] justify-center items-center flex flex-col'>
                            <CommonHeading customClass={'pb-2'} SectionsHeading={item.heading}/>
                            <p className={`max-w-[146px] text-center text-white leading-[150%] text-base max-md:text-sm ${index === 2 ? 'max-w-[187px]' : 'max-w-[146px]'}`}>{item.subHeading} </p>
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ResultsAi
