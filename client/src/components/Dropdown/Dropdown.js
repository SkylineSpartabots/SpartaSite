import React from "react";
import style from "../Dropdown/dropdown.module.css"
import { useState } from "react";


const DropDown = ({ DropDownTitle, link1, link2, link3}) => {

    const [open, setOpen] = useState(false);


    const _hoverHandlerTrue=()=>{
        setOpen(true);

    }

    const _hoverHandlerFalse=()=>{
        setOpen(false);
    }
    

    return (
        <div id='LinkDropDown' className={style.block1} onMouseEnter={_hoverHandlerTrue} onMouseLeave={_hoverHandlerFalse}>
            <p>{DropDownTitle}</p>
            <br></br>
            <p id="p1" style={ { display: open ? "block" : "none"} }>{link1}</p>
            <p id="p2" style={ { display: open ? "block" : "none"} }>{link2}</p>
            <p id="p3" style={ { display: open ? "block" : "none"} }>{link3}</p>

            
        </div>
    )
    
}

export default DropDown;