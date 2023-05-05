'use client'
import React from 'react'
import video from '@/public/videos/video-infomp4.mp4'
import Link from 'next/link'

const SliderVideo = () => {
  return (
    <div className="w-full h-[650px]">
      <div className="relative">
        <video
          className="w-full h-[400px] lg:max-h-[650px] object-cover"
          src={video}
          autoPlay
          muted
        />
        <div className=" absolute bottom-0 text-white p-3 lg:p-5 mb-0 lg:mb-5">
          <div className=" text-sm leading-7 font-bold uppercase mb-3">Residencial</div>
          <div className=" text-[42px] leading-[50px] font-semibold mb-3">
            <Link href="/project">Think Different - Do Different</Link>
          </div>
          <div className=" text-sm leading-7 mb-7">
            Hiện thực hóa ước mơ sở hữu ngôi nhà hoàn hảo của khách hàng, thổi hồn vào từng công
            trình bằng kinh nghiệm, sự chuyên nghiệp của chúng tôi.
          </div>
          <Link
            href="/project"
            className=" flex justify-center items-center cursor-pointer gap-1 w-[150px] text-sm leading-10 rounded-xl px-5 uppercase font-semibold shadow-lg hover:opacity-50 duration-500 text-center bg-[#4f46e5]"
          >
            <div>Xem Dự Án</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SliderVideo
