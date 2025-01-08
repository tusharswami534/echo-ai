import React, { useEffect, useState } from 'react'
import BackToTopIcon from '../assets/image/webp/back-to-top.webp' 

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)
    return (
        <>{scrollTop && (
            <button onClick={scrollHandler} className='fixed right-[10px] bottom-[10px] z-40'><img className='size-9 animate-bounce 2xl:size-14 lg:size-12 bg-black rounded-full' src={BackToTopIcon} alt="back-to-top-btn" /></button>
        )}
        </>
    )
}

export default BackToTop
