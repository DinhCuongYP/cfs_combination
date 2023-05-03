'use client'
import { React, useState } from 'react'

import Button from '@/component/Button/page'
import Link from 'next/link'

function Header() {
  const [open, setOpen] = useState(false)

  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT', link: '/about' },
    { name: 'CONTACT', link: '/contact' },
    { name: 'FQA', link: '/fqa' },
  ]
  return (
    <header className="w-full shadow-md fixed top-0 left-0 ">
      <nav className=" md:flex items-center justify-between  bg-transparent hover:bg-[#233067] duration-500 py-4 md:px-10 px-7">
        <div className=" font-bold text-black text-2xl cursor-pointer hover:text-lime-400 duration-500">
          <Link href="/">CFS Combination</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="bg-[#233067] rounded-lg text-white hover:bg-lime-300 text-4xl absolute right-8 top-4 cursor-pointer md:hidden"
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:bg-transparent  bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl text-center py-3 lg:py-4">
              <Link
                href={link.link}
                className=" text-[#233067]  md:text-black font-black text-1xl hover:text-lime-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Button>
            <a
              className="hidden md:flex bg-indigo-600 text-white font-[Poppins] lg:py-2  lg:px-6 rounded-full lg:rounded  ml-6 lg:ml-8 hover:bg-indigo-400 
              duration-500"
              href="tel:+84898401065"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 lg:w-6 lg:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="hidden lg:block">+84 898 401 065</span>
            </a>
          </Button>
        </ul>
      </nav>
    </header>
  )
}

export default Header
