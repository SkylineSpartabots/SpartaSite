import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import {useAuthContext} from "./hooks/useAuthContext";
import About from "./pages/About";
import AccountManage from "./pages/AccountManage";
import AddAccount from "./pages/AddAccount";
import ComingSoon from "./pages/ComingSoon";
import Dashboard from "./pages/Dashboard";
import FontDemo from "./pages/FontDemo";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import OurTeam from "./pages/OurTeam";
import History from "./pages/History";
import HistoryPage from "./pages/HistoryPage";
import Purchase from "./pages/Purchase";
import Sponsors from "./pages/Sponsors";
import Software from "./pages/Software";
import {useEffect, useState} from "react";

function App() {
    const {user} = useAuthContext();
    const [bool, setbool] = useState(true)
    const [themebool, setthemebool] = useState(true)

    useEffect(() => {
        setthemebool(JSON.parse(localStorage.getItem("theme")))
    }, [])


    useEffect(() => {
        setthemebool(JSON.parse(localStorage.getItem("theme")))
    }, [bool])

    return (
        // routing for the entire site
        <Router>
            {/* navbar and footer appear on every page, so they're outside the router */}
            <TopBar/>
            <Navbar bool={bool} setbool={setbool}/>
            <Routes>
                {/* Each route has its own tag */}
                <Route path="/" element={<Home/>}/>
                {/*<Route path="/fontDemo" element={<FontDemo />} />*/}
                <Route path="/about" element={<About/>}/>
                <Route path="/ourteam" element={<OurTeam/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/history/2024" element={<HistoryPage
                    year="2024"
                    robotName="ARTEMIS"
                    robotNameBlurb="The Goddess of the Hunt"
                    splashImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis_cropped_aspect_uwgkdb.jpg"
                    robotImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis%20Intake.webp"
                    robotInfo="The Spartabots' 2024 robot for the FIRST Challenge CRESCENDO. A quick and light bot with a pivoting shooter and swerve drive, Artemis was an Event Finalist at Auburn and a Semi-Finalist at Sammamish."
                    gameVideo="https://www.youtube.com/embed/9keeDyFxzY4"
                    gameName="CRESCENDO"
                    gameInfo="Alliances compete to score points by either launching orange rings called 'Notes' into the Speaker or by placing them into the Amp. When placed into the Amp further Notes scored in the Speaker are 'Amplified' and worth more points. The Endgame robots attempt to elevate themselves one of three chains hanging on the Stage near center field."
                    performance={[
                        // Note sammamish semi-finalist overflows the box and messes with the other picture alignment
                        // TODO Change these images. Different pic of bot for Artemis blurb. Smth diff for Finalist. Picture of actual award for Creativity Award. Picture of Artemis in the pit for Sammamish Semi-Finalist.
                        {
                            title: "Auburn Finalist",
                            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/drive-pit_medals_2_bwkb8i.jpg",
                            text: "Defeating the 1st Alliance in her first match, Artemis and her Alliance 8 partners, 1983 Skunk Works and 9023 Future Martians, made it to the finals of the Auburn District Event."
                        },
                        {
                            title: "Creativity Award",
                            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/2024%20Award%202",
                            text: "Awarded for our custom 3D printed bumper spacers to both absorb impacts and expand the Artemis' perimeter without changing the drivetrain size."
                        },
                        {
                            title: <div className="antiWrap"> Sammamish Semi-Finalist </div>,
                            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Sammamish_2024_Semi-Finalist_Image_ih1gva.jpg",
                            text: "Ranking number 15 in the qualification matches and being picked by the 3rd Alliance to join 9036 Ramen Robotics and 9442 Miso Mechanics, Artemis made it to the semi-finals of the Sammamish District Event."
                        }]}
                />}/>
                {/*<Route path="/history/2023" element={<HistoryPage*/}
                {/*  year="2023"*/}
                {/*  robotName="ZEUS"*/}
                {/*  robotNameBlurb="The God of the Sky"*/}
                {/*  splashImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus"*/} // TODO get a higher quality picture please somebody
                {/*  robotImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus"*/}
                {/*  robotInfo="Insert robot info here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"*/}
                {/*  gameImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus"*/}
                {/*  gameName="CHARGED UP"*/}
                {/*  gameInfo="Insert game info here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"*/}
                {/*  performance={[*/}
                {/*    {title: "Sammamish Alliance 5", image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"},*/}
                {/*    {title: "Glacier Peak Alliance 6", image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}]}*/}
                {/*  />} />*/}
                {/*<Route path="/history/2022" element={<HistoryPage*/}
                {/*  year="2022"*/}
                {/*  robotName="CHRONOS"*/}
                {/*  robotNameBlurb="The Personification of Time"*/}
                {/*  splashImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos"*/}
                {/*  robotImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos"*/}
                {/*  robotInfo="Insert robot info here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"*/}
                {/*  gameImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos"*/}
                {/*  gameName="RAPID REACT"*/}
                {/*  gameInfo="Insert game info here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"*/}
                {/*  performance={[*/}
                {/*    {title: "Hopper Divison Semi-Finalist", image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}*/}
                {/*  ]}/>} />*/}
                <Route path="/sponsors" element={<Sponsors/>}/>
                <Route path="/join" element={<Join/>}/>
                <Route path="/comingsoon" element={<ComingSoon/>}/>
                <Route path="/purchase" element={<Purchase/>}/>
                <Route path="/software" element={<Software/>}/>
                <Route
                    path="/login"
                    element={!user ? <Login/> : <Navigate to="/dashboard"/>}
                />

                <Route
                    path="/dashboard"
                    element={!user ? <Navigate to="/login"/> : <Dashboard/>}
                />
                <Route
                    path="/accounts"
                    element={
                        !user || !(user.isBoard || user.isAdvisor) ? (
                            <Navigate to="/login"/>
                        ) : (
                            <AccountManage/>
                        )
                    }
                />
                <Route
                    path="/addAccount"
                    element={
                        !user || !(user.isBoard || user.isAdvisor) ? (
                            <Navigate to="/login"/>
                        ) : (
                            <AddAccount/>
                        )
                    }
                />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
