import Link from "next/link";

function Header() {
    return ( 
        <div>
            <header className="w-full h-[70px] max-w-screen-2xl bg-[#233067] flex items-center mx-auto p-6 fixed z-10 top-0 left-0 right-0 bg-transparen">
                    <div className="text-center text-white text-xl font-semibold cursor-pointer basis-2/6 hover:text-red-500 ">
                        <Link href="/">CFS Combination</Link>
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
                    <div className="w-full text-center basis-1/6 ml-16">
                         
                        <div className="flex items-center justify-center rounded-lg p-3 bg-lime-400 cursor-pointer hover:opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <a className=" font-sans text-[#233067] font-medium text-lg text-center" href="tel:098401065">+84 898 401 065</a>
                        </div>
                    </div>
            </header> {/* End Header */}
            
             <div className="w-full h-[680px] min-h-min bg-origin-border bg-[url('https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/342178201_1284708475795750_8759769754545157166_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Se_vyxCz-DcAX8aM2ub&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDmdqpNj6duOSjUv3Z4p4U_zU_naLOuvj1HZlNB5ci03g&oe=6454263B')] bg-cover bg-no-repeat bg-center ">
                    <div className="w-full h-full bg-black opacity-50">
                        <div className="w-[40%] h-[80%] z-10 pl-[10%] flex flex-col items-center justify-end">
                            <div className="m-0 font-mono font-bold text-6xl text-[#233067]">CFS Combination</div>
                            <p className="py-5 font-serif text-3xl text-white">Bên mình cung cấp các kiểu nhà Mỹ cho thị trường Việt Nam, và tất nhiên  là giá cả cho người Việt có thể tiếp cận được.</p>
                            <div className=" w-[50%] flex items-center justify-center cursor-pointer hover:opacity-80 h-10 rounded-lg p-1 bg-lime-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                                <Link href='/project'>
                                    <span className=" font-medium font-mono text-lg">Xem Dự Án</span>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     );
}

export default Header;
