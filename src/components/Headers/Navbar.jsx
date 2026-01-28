


const Navbar = () => {
    const navList = <ul className="lg:rounded-none shadow lg:shadow-none rounded-box menu menu-horizontal px-1 dropdown-content text-[#48448a] font-semibold z-1 mt-3  p-2  ">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
    </ul>

    // menu-sm rounded-box shadow

    // w-52

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
                     <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                       
                    </div>
                </div>
                </div>
            </div>


            
        </div>
    );
};

export default Navbar;