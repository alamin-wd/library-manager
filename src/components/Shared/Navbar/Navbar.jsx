import { Link, NavLink } from "react-router-dom";
// import logo from "../../../assets/logo/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useEffect, useState } from "react";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    // const { user, setUser, LogOut } = useContext(AuthContext);

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsNavbarVisible(false);
            } else {
                // Scrolling up
                setIsNavbarVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // const handleSignOut = () => {
    //     LogOut()
    //         .then(() => {
    //             setUser(null);
    //             navigate('/');
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    const menus = <>
        <li>
            <NavLink to={"/"} className="mx-1">Home</NavLink>
        </li>

        <li>
            <NavLink to={"/all-books"} className="mx-1">All Books</NavLink>
        </li>

        <li>
            <NavLink to={"/borrowed-books"} className="mx-1">Borrowed Books</NavLink>
        </li>

        <li>
            <NavLink to={"/add-books"} className="mx-1">Add Books</NavLink>
        </li>
    </>

    return (

        <div>

            <div className={`navbar w-full bg-base-100 md:px-14 transition-top duration-500
        ${isNavbarVisible ? 'fixed top-0 left-0 right-0 z-50' : 'fixed -top-[82px] left-0 right-0 z-50 bg-transparent'}`}>

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                menus
                            }

                        </ul>
                    </div>

                    <Link to={"/"}>
                        {/* <img className="w-14 md:w-24" src={logo} alt="Logo" /> */}
                        <h2 className="text-4xl text-black font-bold">Library Manager</h2>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menus
                        }
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end mr-6 md:mr-0">

                    <button className="btn-circle text-2xl">
                        <IoSearchSharp />
                    </button>

                    <Link to={"/cartDetails"}>
                        <button className="btn-circle text-2xl">
                            <HiOutlineShoppingBag />
                        </button>
                    </Link>

                    <NavLink to="/signIn">
                        <button className="bg-[#FF3811] hover:bg-[#d23111] px-4 py-2 text-white rounded-lg">Sign In</button>
                    </NavLink>

                    {/* <div className="flex items-center gap-3">
                        {!user ? (
                            <>
                                <NavLink to="/signIn">
                                    <button className="bg-[#FF3811] hover:bg-[#d23111] px-4 py-2 text-white rounded-lg">Sign In</button>
                                </NavLink>

                                <NavLink to="/signUp">
                                    <button className="bg-[#FF3811] hover:bg-[#d23111] px-4 py-2 text-white rounded-lg">Sign Up</button>
                                </NavLink>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">


                                <button className="text-[#FF3811] text-base md:text-lg font-medium border border-[#FF3811] rounded-lg px-2 py-1 md:px-4 md:py-2 ms-1">
                                    Appointment
                                </button>

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={user.photoURL} alt="User Avatar" />
                                        </div>
                                    </label>

                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-lg w-40">
                                        <li>
                                            <a>{user.displayName}</a>
                                        </li>
                                        <li>
                                            <a>{user.email}</a>
                                        </li>
                                        <li>
                                            <a href="/updateItems">Update Items</a>
                                        </li>

                                        <li>
                                            <a onClick={handleSignOut}>Sign Out</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        )}
                    </div> */}

                </div>
            </div>

        </div>
    );
};

export default Navbar;
