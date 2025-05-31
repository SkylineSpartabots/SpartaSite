import {useEffect} from "react";
import Splash from "../components/Splash";
import splashImg from "../graphics/images/Intake-2024.webp"
import DropDown from "../components/Dropdown/Dropdown.js"
const links = () => {

    return(
        <div className = 'Body'>
            <Splash title = 'Our'
                    subtitle='Resources'
                    image = {splashImg}/>

            <DropDown DropDownTitle={"Media/Business"} link1={"idk bruh"}/>
            <DropDown DropDownTitle={"Build Links"}/>
            <DropDown DropDownTitle={"Electronic Links"}/>
            <DropDown DropDownTitle={"Software Links"}/>
        </div>

    )
}

export default links;