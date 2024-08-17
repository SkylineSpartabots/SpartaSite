import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {BiMenu} from "react-icons/bi";
import useIsMobile from "../hooks/useIsMobile";
import {useState} from "react";

const NavbarItem = ({path, name, loc}) => {
    return (
        <Link
            className="navbar-item font-semibold text-3xl md:text-xl whitespace-nowrap no-underline text-white m-3 mt-4"
            to={path}
        >
            {name}
            {loc.pathname.toLowerCase() === path.toLowerCase() && (
                <hr className="w-full"></hr>
            )}
        </Link>
    );
};

const setThemeColors = theme => {
    document.documentElement.style.setProperty('--textColor', theme ? "black" : "white");
    document.documentElement.style.setProperty('--bgColor', theme ? "white" : "black");
    document.documentElement.style.setProperty('--titleColor', theme ? "rgb(6 95 70)" : "rgb(68 147 91)");
    document.documentElement.style.setProperty('--containerColor', theme ? "lightgrey" : "rgb(20 20 20)");
}
//         <NavbarItem path="/ourteam" name="Our Team" loc={location} />  (use once page setup)
const Navbar = ({bool, setbool}) => {
    let location = useLocation();
    const [themebool, setthemebool] = useState(true)

    useEffect(() => {
        var theme = JSON.parse(localStorage.getItem("theme"));
        setthemebool(theme);
        setThemeColors(theme);
    }, [])


    const {handleShowMenu, showMenu} = useIsMobile();
    const handleClick = () => {
        setThemeColors(!themebool);
        setthemebool(!themebool)
        localStorage.setItem("theme", !themebool);
        setbool(!bool)
    }


    return (
        <nav className="flex absolute top-0 w-full black-fade-top z-10">
            <a // Spartabots title
                href="/"
                className="text-2xl md:text-3xl font-scoutcond italic font-extrabold whitespace-nowrap text-white ml-6 mt-3 h-fit"
            >
                THE SPARTABOTS
            </a>
            <div // Light/Dark mode button - I had to move this out of the bigger div (below now) because it made this button extend the whole screen
                className="theme block sm:hidden py-1 px-1 justify-center items-center relative left-2 h-[50%] my-3 mt-3 bg-[#6180dc] rounded-full">
                {themebool ?
                    <svg onClick={handleClick} className="cursor-pointer invert" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" width="27" height="27" color="#000000" fill="none">
                        <path
                            d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M12 1.99902V2.99902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M22 11.999H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M3 11.999H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M19.0704 4.92773L18.3633 5.63484" stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.6368 5.63582L4.92969 4.92871" stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47685 16.6154C8.18725 16.6155 7.95467 16.8612 7.98925 17.1488C8.1009 18.0771 8.3827 18.7553 9.45345 19.3055M14.517 19.3055C14.517 19.3055 9.62971 19.3055 9.45345 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60303 21.0831 9.45345 19.3055"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> : <svg onClick={handleClick} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="27" height="27" color="#000000" fill="none">
                        <path
                            d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M12 1.99902V2.99902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M22 11.999H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M3 11.999H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M19.0704 4.92773L18.3633 5.63484" stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.6368 5.63582L4.92969 4.92871" stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47685 16.6154C8.18725 16.6155 7.95467 16.8612 7.98925 17.1488C8.1009 18.0771 8.3827 18.7553 9.45345 19.3055M14.517 19.3055C14.517 19.3055 9.62971 19.3055 9.45345 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60303 21.0831 9.45345 19.3055"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
            </div>

            <div className={`${showMenu ? "top-[0] opacity-100" : "top-[-440%] opacity-0"} transition-all flex absolute flex-col justify-center items-center sm:items-start  sm:flex-row sm:top-0 w-full sm:gap-4 backdrop-blur-2xl sm:backdrop-blur-none h-[100vh] sm:h-fit sm:bg-transparent sm:justify-end z-0`}>
                <div
                    className="theme p-2 justify-center items-center h-full my-3 mt-3 bg-[#6180dc] rounded-full sm:block hidden">
                    {themebool ? <svg onClick={handleClick} className="cursor-pointer invert"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"
                                        color="#000000" fill="none">
                            <path
                                d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M12 1.99902V2.99902" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            <path d="M22 11.999H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            <path d="M3 11.999H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            <path d="M19.0704 4.92773L18.3633 5.63484" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.6368 5.63582L4.92969 4.92871" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47685 16.6154C8.18725 16.6155 7.95467 16.8612 7.98925 17.1488C8.1009 18.0771 8.3827 18.7553 9.45345 19.3055M14.517 19.3055C14.517 19.3055 9.62971 19.3055 9.45345 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60303 21.0831 9.45345 19.3055"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg> :
                        <svg onClick={handleClick} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" width="26" height="26" color="#000000" fill="none">
                            <path
                                d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M12 1.99902V2.99902" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            <path d="M22 11.999H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            <path d="M3 11.999H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            <path d="M19.0704 4.92773L18.3633 5.63484" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.6368 5.63582L4.92969 4.92871" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47685 16.6154C8.18725 16.6155 7.95467 16.8612 7.98925 17.1488C8.1009 18.0771 8.3827 18.7553 9.45345 19.3055M14.517 19.3055C14.517 19.3055 9.62971 19.3055 9.45345 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60303 21.0831 9.45345 19.3055"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>}
                </div>
                {/*Navbar Items*/}
                <NavbarItem path="/" name="Home" loc={location}/>
                <NavbarItem path="/history" name="History" loc={location}/>
                <NavbarItem path="/sponsors" name="Sponsors" loc={location}/>
                <NavbarItem path="/join" name="Join" loc={location}/>
                {/* The break fixes the spacing. */}
                <br/>
            </div>

            <BiMenu className="text-white text-4xl ml-auto mt-2 mr-4 cursor-pointer sm:hidden"
                    onClick={handleShowMenu}/>
        </nav>
    );
};


export default Navbar;
