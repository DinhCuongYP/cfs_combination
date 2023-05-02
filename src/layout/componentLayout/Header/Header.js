import Link from "next/link";

function Header() {
    return ( 
        <header className="w-full h-[70px] max-w-screen-2xl bg-transparent hover:bg-[#233067] transition-all flex items-center mx-auto p-6 fixed z-10 top-0 left-0 right-0 bg-transparen">
                <div className="basis-2/6">
                    <div className=" px-2">
                        <Link className="hover:text-lime-400 text-white font-black text-3xl" href="/">CFS Combination</Link>
                    </div>
                </div>
                <ul className="flex items-center justify-end gap-8 basis-3/6 uppercase text-sm text-gray-500 font-medium ">
                    <li className="relative  text-white text-2xl font-mono    cursor-pointer py-1 lg:after:absolute lg:after:h-0.5 lg:after:w-0 hover:lg:after:w-full lg:after:bottom-0 lg:after:left-0  lg:after:bg-red-500 lg:after:transition-all lg:after:ease-in-out lg:after:duration-300">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="relative text-white  text-2xl font-mono  cursor-pointer py-1 lg:after:absolute lg:after:h-0.5 lg:after:w-0 hover:lg:after:w-full lg:after:bottom-0 lg:after:left-0  lg:after:bg-red-500 lg:after:transition-all lg:after:ease-in-out lg:after:duration-300">
                        <Link href='/about'>About</Link>
                    </li>
                    <li className="relative  text-white text-2xl font-mono  cursor-pointer py-1 lg:after:absolute lg:after:h-0.5 lg:after:w-0 hover:lg:after:w-full lg:after:bottom-0 lg:after:left-0  lg:after:bg-red-500 lg:after:transition-all lg:after:ease-in-out lg:after:duration-300">
                        <Link href='/project'>Project</Link>
                    </li>
                    <li className="relative text-white  text-2xl font-mono  cursor-pointer py-1 lg:after:absolute lg:after:h-0.5 lg:after:w-0 hover:lg:after:w-full lg:after:bottom-0 lg:after:left-0  lg:after:bg-red-500 lg:after:transition-all lg:after:ease-in-out lg:after:duration-300">
                        <Link href='/'>Contact</Link>
                    </li>
                    <li className="relative text-white  text-2xl font-mono  cursor-pointer py-1 lg:after:absolute lg:after:h-0.5 lg:after:w-0 hover:lg:after:w-full lg:after:bottom-0 lg:after:left-0  lg:after:bg-red-500 lg:after:transition-all lg:after:ease-in-out lg:after:duration-300">
                        <Link href='/fqa'>FQA</Link>
                    </li>
                    
                </ul>
                <div className="basis-1/6 ml-16">
                    <div className=" flex items-center justify-center cursor-pointer bg-lime-400 font-black py-2 rounded-full hover:opacity-80">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-10 h-10  ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div className=" text-xl text-[#233067]">
                            +84 898 401 065
                        </div>
                    </div>
                </div>
        </header>
     );
}

export default Header;
