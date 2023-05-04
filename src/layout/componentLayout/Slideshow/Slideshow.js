'use client'
import { React, useState } from 'react'

function Slideshow() {
  const slides = [
    {
      url: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/342178201_1284708475795750_8759769754545157166_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xBsnSI0x70sAX8xAlgI&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCC94KpZ60CUo3XeJwicb1cJwX0XktTZu1ySRimGdslgQ&oe=64581ABB',
    },
    {
      url: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/342491749_610076617833243_4627580832220747425_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rfKNRj-1g8UAX_5I8t6&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAMi1nEpZ7ab0HMkruBwClGZcskHSY31KPPB3McBY-Jtg&oe=64585764',
    },
    {
      url: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/344540387_216622504417065_312622676631038515_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FIILBRiMTmAAX_1y4ty&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBBKk7yt6aeKja4YXI_OeJUbpEd0dDoeqJ1JAZhvN6q-A&oe=6457E8E3',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <div className="w-full h-[780px] group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full bg-no-repeat bg-center bg-cover duration-500"
      ></div>
      {/* Left icon */}
      <div
        onClick={prevSlide}
        className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5  text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      {/* Right icon */}
      <div
        onClick={nextSlide}
        className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5  text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </div>
    </div>
  )
}

export default Slideshow
