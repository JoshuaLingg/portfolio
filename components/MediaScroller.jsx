"use client"

import Link from "next/link";
import { useState } from "react";

import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const MediaScroller = () => {
  const slides = [
    {
      url: '/chess-img/chess-scroller.png',
      href: "/chess-page"
    },
    {
      url: '/tictactoe/tictactoe-scroller.png',
      href: "/tictactoe-page" 
    },
    {
      url: '/musicbox/musicbox-example.png',
      href: "/musicbox-page" 
    },
    {
      url: '/postingapp/postingapp-example.png',
      href: "/postingapp-page" 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto mb-20 py-16 px-4 relative">
      <h1
        className='text-center text-6xl text-white pb-4 bg-zinc-400 border-b-[10px] border-b-zinc-500 rounded-t-2xl'
      >
        Scroll Through my projects
      </h1>
      <div
        style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className="w-full h-full rounded-b-2xl bg-center bg-cover transition-[height]"
      >
        <Link
        href={`${slides[currentIndex].href}`}
        className="max-w-[1400px] h-[652px] rounded-b-2xl block overflow-hidden 
          hover:bg-gradient-to-r from-cyan-400/20 via-white/0 to-cyan-400/20"
        >
        </Link>
        {/* Left Arrow */}
        <div 
          onClick={prevSlide} 
          className="py-20 absolute top-[30%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/40 hover:bg-black text-white cursor-pointer"
        >
          <BsChevronCompactLeft size={30}/>
        </div>
        {/* Right Arrow */}
        <div 
          onClick={nextSlide}
          className="py-20 absolute top-[30%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/40 hover:bg-black text-white cursor-pointer"
        >
          <BsChevronCompactRight size={30}/>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => {
            return (
            <div 
              key={slideIndex} 
              onClick={() => goToSlide(slideIndex)} 
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled 
                style={{color: currentIndex === slideIndex ? "rgb(183,19,216)" : "white"}}
                
                className="text-4xl"
              />
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default MediaScroller