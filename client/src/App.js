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
import Mentors from "./pages/Mentors";
import {useEffect, useState} from "react";

const LoginRedirect = () => {
    useEffect(() => {
        window.location.href = "https://docs.google.com/spreadsheets/d/1Oej3ELY0IZs_41ULVrvsGiq36o6mAh5lx8zxWlClZmg/edit?gid=0#gid=0";
    }, []);

    return null; // or you can return a loading spinner or message if you want
};

function App() {
    const {user} = useAuthContext();
    const [bool, setbool] = useState(true)

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
                    gameInfo="Alliances compete to score points by either launching orange rings called 'Notes' into the Speaker or by placing them into the Amp. When placed into the Amp further Notes scored in the Speaker are 'Amplified' and worth more points. In the Endgame, robots attempt to elevate themselves on one of three chains hanging from the Stage near center field."
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
                <Route path="/history/2023" element={<HistoryPage
                    year="2023"
                    robotName="ZEUS"
                    robotNameBlurb="The God of the Sky"
                    splashImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus"  // TODO: get a higher quality picture please somebody
                    robotImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus"
                    robotInfo="Zeus was the Spartabots' 2023 robot. A tall and mighty robot with an elevator to raise its arm and a swerve drive, Zeus was selected for the 5th and 6th alliances at Sammamish and Glacier Peak regional events, respectively."
                    gameVideo="https://www.youtube.com/embed/0zpflsYc4PA"
                    gameName="CHARGED UP"
                    gameInfo="Alliances compete to score points by placing cubes and cones onto platforms and poles located in front of the driver station walls. Groups of 3 game pieces form Links, creating enough Links awards the Alliance the Sustainability Bonus. In the Endgame robots attempt to balance themselves upon the Charge Station."
                    performance={[
                        {
                            title: "Sammamish Alliance 5",
                            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus",
                            text: "Zeus was ranked number 8 and was the first pick of Alliance 5. Zeus competed alongside 1899 Saints Robotics and 9023 Future Martians, making it to only the 3rd round of the playoffs."
                        },
                        {
                            title: "Glacier Peak Alliance 6",
                            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus",
                            text: "The first choice of Alliance 6 at Glacier Peak, Zeus teamed up with 4681 Murphy's Law and 3049 BremerTron making it only 2 rounds into the playoffs."
                        }]}
                />}/>
                <Route path="/history/2022" element={<HistoryPage
                    year="2022"
                    robotName="CHRONOS"
                    robotNameBlurb="The Personification of Time"
                    splashImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos"
                    robotImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos"
                    robotInfo="Equipped with a stowable intake and LimeLight vision system, Chronos was the Spartabots' 2022 robot. Chronos was a Quarter-Finalist in the Hopper Division and a Finalist in the Auburn, Bonney Lake, and Pacific Northwest District Events."
                    gameVideo="https://www.youtube.com/embed/LgniEjI9cCM"
                    gameName="RAPID REACT"
                    gameInfo="Alliances compete to score points by launching balls into the Lower and Upper Hubs. Robots may collect game pieces from Terminals on either side of the field. In the Edngame robots try to climb up a set of bars in the Hanger to earn additional points."
                    performance={[
                        {
                            title: "Hopper Divison Quarter-Finalist",
                            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos",
                            text: "Chronos was the 3rd pick of Alliance 5 in the Hopper Division. The alliance made it to the quarter-finals, but lost to the 4th Alliance."
                        },
                        {
                            title: "Pacific Northwest District Finalist",
                            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos",
                            text: "Chronos was the Captain of Alliance 2, selecting 488 XBOT and 2046 Bear Metal as partners. The alliance made it to the finals, but lost to the 1st Alliance."
                        }

                    ]}/>}/>
                {/*<Route path="/history/2020" element={<HistoryPage*/}
                {/*    year="2020"*/}
                {/*    robotName="OLYMPUS"*/}
                {/*    robotNameBlurb="The Personification of Time"*/}
                {/*    splashImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos"*/}
                {/*    robotImage="https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos"*/}
                {/*    robotInfo="Equipped with a stowable intake and LimeLight vision system, Chronos was the Spartabots' 2022 robot. Chronos was a Quarter-Finalist in the Hopper Division and a Finalist in the Auburn, Bonney Lake, and Pacific Northwest District Events."*/}
                {/*    gameVideo="https://www.youtube.com/embed/LgniEjI9cCM"*/}
                {/*    gameName="RAPID REACT"*/}
                {/*    gameInfo="Alliances compete to score points by launching balls into the Lower and Upper Hubs. Robots may collect game pieces from Terminals on either side of the field. In the Edngame robots try to climb up a set of bars in the Hanger to earn additional points."*/}
                {/*    performance={[*/}
                {/*        {*/}
                {/*            title: "Hopper Divison Quarter-Finalist",*/}
                {/*            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos",*/}
                {/*            text: "Chronos was the 3rd pick of Alliance 5 in the Hopper Division. The alliance made it to the quarter-finals, but lost to the 4th Alliance."*/}
                {/*        },*/}
                {/*        {*/}
                {/*            title: "Pacific Northwest District Finalist",*/}
                {/*            image: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos",*/}
                {/*            text: "Chronos was the Captain of Alliance 2, selecting 488 XBOT and 2046 Bear Metal as partners. The alliance made it to the finals, but lost to the 1st Alliance."*/}
                {/*        }*/}

                {/*    ]}/>}/>*/}
                <Route path="/sponsors" element={<Sponsors/>}/>
                <Route path="/join" element={<Join/>}/>
                <Route path="/comingsoon" element={<ComingSoon/>}/>
                <Route path="/purchase" element={<Purchase/>}/>
                <Route path="/software" element={<Software/>}/>
                <Route path="/mentors" element={<Mentors mentors={[
                    {
                        name: <div className="antiWrap"> Name </div>,
                        portrait: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Sammamish_2024_Semi-Finalist_Image_ih1gva.jpg",
                        text: "Insert text info here."
                    },
                    {
                        name: <div className="antiWrap"> Name </div>,
                        portrait: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Sammamish_2024_Semi-Finalist_Image_ih1gva.jpg",
                        text: "Insert text info here."
                    },
                    {
                        name: <div className="antiWrap"> Name </div>,
                        portrait: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Sammamish_2024_Semi-Finalist_Image_ih1gva.jpg",
                        text: "Insert text info here."
                    },
                    {
                        name: <div className="antiWrap"> Name </div>,
                        portrait: "https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Sammamish_2024_Semi-Finalist_Image_ih1gva.jpg",
                        text: "Insert text info here."
                    }
                ]}/>}/>
                <Route path="/login" element={<LoginRedirect />} />

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
