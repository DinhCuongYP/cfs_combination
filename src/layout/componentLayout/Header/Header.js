import Link from "next/link";

function Header() {
    return ( 
        <div>
            <header className="w-full h-[70px] max-w-screen-2xl flex items-center mx-auto p-6 fixed z-10 top-0 left-0 right-0 bg-transparen">
                
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
                            <Link href='/fqa'>FQA</Link>
                        </li>
                    </ul>
                    <div className="p-3 w-full text-center basis-1/6 ml-16 bg-[#233067] hover:opacity-50 cursor-pointer text-white rounded-3xl">
                        <a href="tel:098401065">+84 898 401 065</a>
                    </div>
            </header>
            <div className="w-full h-[800px] min-h-min bg-origin-border bg-[url('https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/342178201_1284708475795750_8759769754545157166_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Se_vyxCz-DcAX8aM2ub&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDmdqpNj6duOSjUv3Z4p4U_zU_naLOuvj1HZlNB5ci03g&oe=6454263B')] bg-cover bg-no-repeat bg-center ">
                    <div className="w-[40%] h-[80%] pl-[10%] flex flex-col items-center justify-end">
                        <h1 className="m-0 font-mono font-bold text-6xl text-[#233067]">CFS Combination</h1>
                        <p className="py-5 text-3xl text-white">Bên mình cung cấp các kiểu nhà Mỹ cho thị trường Việt Nam, và tất nhiên  là giá cả cho người Việt có thể tiếp cận được</p>
                    </div>
            </div>
        </div>
     );
}

export default Header;
