import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    const navList = <ul className="lg:rounded-none bg-base-200 shadow lg:shadow-none rounded-box menu menu-horizontal px-1 dropdown-content text-[#48448a] font-semibold z-1 mt-3  p-2  ">
        <li><a href="#">Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
    </ul>



    return (
        <div>
            <div className="navbar bg-base-200 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1">
                            {navList}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl text-[#48448a] ">
                        A
                        <span className="text-3xl mt-1 text-green-500">Foodi</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul>

                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2 ">
                        <div className="w-full relative">
                            <IoSearchOutline className=" text-gray-500
                             absolute z-1 left-3  bottom-3" />
                            <input type="text" placeholder="     Search" className="input input-bordered rounded-4xl w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-circle avatar btn-ghost ">

                                <CgProfile className="text-5xl text-green-500" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Navbar;