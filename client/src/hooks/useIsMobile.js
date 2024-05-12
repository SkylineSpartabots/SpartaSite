import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const getIsMobile = () => window.innerWidth <= 640;

export default function useIsMobile() {
    const [showMenu, setShowMenu] = useState(!getIsMobile());
    const location = useLocation();
    const handleShowMenu = () => setShowMenu(!showMenu);
    
    // check for width of page using getIsMobile and modifies showMenu state
    useEffect(() => {

        const onResize = () => {
            if(getIsMobile()) setShowMenu(false);  
            else setShowMenu(true);           
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    // when user clicks on navLink closes menu on mobile
    useEffect(() => {
        if(getIsMobile()) setShowMenu(false)
        
    }, [location]);
    
    return {showMenu, handleShowMenu};
}