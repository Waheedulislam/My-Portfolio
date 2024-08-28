import { Link } from "react-scroll";
import logoName from '../../assets/w-logo2.png'
const Navbar = () => {
    const navOption = <>
        <li>
            <Link to='home'><a>Home</a></Link>
        </li>
        <li>
            <Link to='service'><a>Service</a></Link>
        </li>
        <li>
            <Link to="skill"><a>Skills</a></Link>
        </li>

        <li>
            <Link to='projects'><a>Projects</a></Link>
        </li>
        <li>
            <Link to="contact-me"><a>Contact Me</a></Link>
        </li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-50 bg-base-100">
                <div className="lg:navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
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
                            className="text-white menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>


                    </div>

                    <Link to='home' className=" flex  text-2xl text-pink-600 font-bold">
                        <img className="h-14 w-14" src={logoName} alt="" /> <a >aheedul</a>
                    </Link>


                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="text-white menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                {/* <div className="lg:navbar-end">
                    <a className=" btn btn-ghost text-white sm:ml-7">Contact Me</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;