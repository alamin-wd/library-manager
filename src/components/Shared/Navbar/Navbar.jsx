import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {

    const { user, setUser, LogOut } = useContext(AuthContext);

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {

                setIsNavbarVisible(false);
            } else {

                setIsNavbarVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleSignOut = () => {
        LogOut()
            .then(() => {
                setUser(null);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

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

            <div className={`navbar w-full bg-[#f5efe1] md:px-14 transition-top duration-500
        ${isNavbarVisible ? 'fixed top-0 left-0 right-0 z-50' : 'fixed -top-[82px] left-0 right-0 z-50 bg-transparent'}`}>

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RiMenuLine className="text-2xl text-[#c0392b] font-extrabold" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                menus
                            }

                        </ul>
                    </div>

                    <Link to="/">

                        <h2 className="text-xl md:text-4xl font-bold text-[#c0392b]">Library Manager</h2>
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
                        <IoSearchSharp className="hover:text-[#c0392b]" />
                    </button>

                    <Link to={"/cartDetails"}>
                        <button className="btn-circle text-2xl">
                            <HiOutlineShoppingBag className="hover:text-[#c0392b]" />
                        </button>
                    </Link>

                    <div className="flex items-center gap-3">
                        {!user ? (
                            <>
                                <NavLink to="/signIn">
                                    <button className="bg-[#c0392b] hover:bg-[#e74c3c] px-4 py-2 text-white rounded-lg">Sign In</button>
                                </NavLink>

                            </>
                        ) : (
                            <div className="flex items-center gap-3">

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full"
                                            title={user?.displayName}>

                                            <img
                                                referrerPolicy="no-referrer"
                                                src={user?.photoURL}
                                                alt="User Avatar" />
                                        </div>
                                    </label>

                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-lg w-52">
                                        <li>
                                            <a>{user.displayName}</a>
                                        </li>
                                        <li>
                                            <a>{user.email}</a>
                                        </li>
                                        <li>
                                            <a href="/borrowed-books">My Borrowed Books</a>
                                        </li>
                                        <li>
                                            <a onClick={handleSignOut}>Sign Out</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;
