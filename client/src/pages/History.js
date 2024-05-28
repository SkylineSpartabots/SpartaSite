import {useEffect, useState} from "react";
import Splash from "../components/Splash";
import Card from "../components/Card";

const History = () => {
    const [themebool, setthemebool] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setthemebool(JSON.parse(localStorage.getItem("theme")))
    }, []);

    return (
        <div>
            <Splash
                title="HISTORY"
                subtitle="2009 — 2024"
                image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/RobotBlur"}
            />
            <div className="containerColor flex flex-col gap-8 items-center p-8">
                <Card
                    title="[history/2024](2024 — ARTEMIS)"
                    text={["Artemis is the Spartabots' current robot for the FIRST Challenge CRESCENDO, this robot was an Event Finalist at Auburn and a Semi-Finalist at Sammamish!", "Currently In Use"]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis_cropped_aspect_uwgkdb.jpg"}
                    alt="2024 FRC robot named artemis"
                />
                <Card
                    title="[history/2023](2023 — ZEUS)"
                    text={["Zeus was the Spartabots' 2023 robot for the FIRST Challenge CHARGED UP, this robot was apart of Alliance 5 at Sammamish and Alliance 6 at Glacier Peak!"]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Zeus"}
                    alt="2023 FRC robot named zeus"
                />
                <Card
                    title="[history/2022](2022 — CHRONOS)"
                    text={["Chronos was the Spartabots' 2022 competition robot for the FIRST challenge RAPID REACT, this robot made it to World's in the Hopper divison as a Semi-Finalist."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Chronos"}
                    alt="2022 FRC robot named chronos"
                />
                <Card
                    title="[history/2020](2020 — OLYMPUS)"
                    text={["Olympus was the Spartabots' 2020 robot for the FIRST Challenge INFINITE RECHARGE, we were Glacier Peak finalists with a qualifying record of 11-7-0."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2020%20Bot%20(OLYMPUS)%20~%20FIRST%20INFINITE%20RECHARGE"}
                    alt="2020 FRC Competition Robot OLYMPUS"
                />
                <Card
                    title="[history/2019](2019 — KHAOS)"
                    text={["Khaos was the Spartabots' 2019 robot for the FIRST Challenge DEEP SPACE, we were Hopper Division finalists with a qualifying record of 39-29-0."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2019%20Bot%20(KHAOS)%20~%20FIRST%20DEEP%20SPACE"}
                    alt="2019 FRC Competition Robot KHAOS"
                />
                <Card
                    title="[history/2018](2018 — HERMES)"
                    text={["Hermes was the Spartabots' 2018 robot for the FIRST Challenge POWER UP, we were the WORLD CHAMPIONS with a qualifying record of 41-30-0. This was our first year with robot names!"]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2018%20Bot%20(HERMES)%20~%20FIRST%20POWER%20UP"}
                    alt="2018 FRC Competition Robot HERMES"
                />
                <Card
                    title="[history/2017](2017 — FIRST STEAMWORKS)"
                    text={["The Spartabots participated in the FIRST STEAMWORKS challenge at Auburn Mountainview and Glacier Peak, our qualifying record was 12-12-2."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2017%20Bot%20~%20FIRST%20STEAMWORKS"}
                    alt="2017 FRC Competition Robot"
                />
                <Card
                    title="[history/2016](2016 — FIRST STONGHOLD)"
                    text={["In the FIRST STRONGHOLD Challenge, The Spartabots were winners of the Glacier Peak event with a qualifying record of 12-13-0."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2016%20Bot%20~%20FIRST%20STRONGHOLD"}
                    alt="2016 FRC Competition Robot"
                />
                <Card
                    title="[history/2015](2015 — FIRST RECYCLE RUSH)"
                    text={["Spartabots participated in the FIRST RECYCLE RUSH challenge at Auburn Mountainview and Mount Vernon Event, our qualifying score was 57.83, our playoff score was 63.25."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2015%20Bot%20~%20FIRST%20RECYCLE%20RUSH"}
                    alt="2015 FRC Competition Robot"
                />
                <Card
                    title="[history/2014](2014 — FIRST ARIEL ASSIST)"
                    text={["In the 2014 competition season, The Spartabots were FINALISTS at Glacier Peak and were DCMP participants, with a qualifying record of 22-21-1."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2014%20Bot%20~%20FIRST%20ARIEL%20ASSIST"}
                    alt="2014 FRC Competition Robot"
                />
                <Card
                    title="[history/2013](2013 — FIRST ULTIMATE ASCENT)"
                    text={["The Spartabots participated in the FIRST ULTIMATE ASCENT challenge at the Central Washington Regional, we won the Creativity Award sponsored by Xerox and our qualifying record was 7-4-0."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2013%20Bot%20~%20FIRST%20ULTIMATE%20ASCENT"}
                    alt="2013 FRC Competition Robot"
                />
                <Card
                    title="[history/2012](2012 — FIRST REBOUND RUMBLE)"
                    text={["The Spartabots participated in the FIRST REBOUND RUMBLE challenge at the Seattle Cascade Regional, our qualifying record was 3-8-0."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2012%20Bot%20~%20FIRST%20REBOUND%20RUMBLE"}
                    alt="2012 FRC Competition Robot"
                />
                <Card
                    title="[history/2011](2011 — FIRST LOGO MOTION)"
                    text={["The Spartabots participated in the FIRST LOGO MOTION challenge at the Seattle Olympic Regional, our qualifying record was 4-4-2."]}
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/v1/RobotImages/2011%20Bot%20~%20FIRST%20LOGO%20MOTION"}
                    alt="2011 FRC Competition Robot"
                />
            </div>
        </div>
    );
};

export default History;