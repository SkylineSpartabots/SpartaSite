import Splash from "../components/Splash";
import Button from "../components/Button";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Card from "../components/Card";
import InfoBlock from "../components/InfoBlock";

const About = () => {
    // this function scrolls to the top of the page when first navigated to
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    function handleClick() {
        navigate("/sponsors");
    }

    return (
        <div className="">
            <Splash title="ABOUT US" subtitle="THE SPARTABOTS"
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis%20In%20Game"}/>
            <div className={`containerColor flex flex-col gap-8 items-center p-8`}>
                <Card
                    title="CLUB OVERVIEW"
                    text=""
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/yanda"} // team photo, maybe something older
                    alt="Group photo of the Spartabots team"
                />
                <Card
                    title="OUR MISSION"
                    text=""
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/CRESENDO%20Game"} // Outreach close up of interaction
                    alt="Wide shot of the FIRST Robotics Competition"
                    allowLinks="true"
                />
                <Card
                    title="COMMUNITY"
                    text=""
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis%20In%20Game"} // Outreach wider view with more spread - larger group, maybe a speech to crowd?
                    alt="Picture of the CHRONOS bot"
                />
                <Card
                    title="SPONSORS"
                    text=""
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis%20In%20Game"} // pic of the zeus sponsor panel, maybe the sponsor banner?
                    alt="Picture of the CHRONOS bot"
                />
                {/*// prolly remove these info blocks dont need them but will keep for now*/}
                <div style={{backgroundColor: "var(--bgColor)"}}
                     className="hidden sm:flex flex-row flex-initial px-6 py-8 max-w-[1000px] rounded-2xl gap-4">
                    <InfoBlock
                        title="Our Sponsors"
                        text="The Spartabots wouldn't exist without the support of our gracious sponsors, who help us in a variety of ways from granting money to donating parts."
                        buttonPath="/sponsors"
                    />
                    <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>
                    <InfoBlock
                        title="Community"
                        text="Our goal is to raise awareness and interest among the people of our community about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives."
                        buttonPath="/about"
                    />
                    <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>
                    <InfoBlock
                        title="Get Involved"
                        text="We are always looking for any help within the club. Whether it be new students to join us, new mentors, or new sponsors to support our team."
                        buttonPath="/join"
                    />
                </div>

                <div style={{backgroundColor: "var(--bgColor)"}}
                     className="sm:hidden flex flex-col flex-initial px-8 py-8 w-full items-center bg-white rounded-2xl gap-4">
                    <InfoBlock
                        title="Our Sponsors"
                        text="The Spartabots wouldn't exist without the support of our gracious sponsors, who help us in a variety of ways from granting money to donating parts."
                        buttonPath="/sponsors"
                    />
                    <hr className="w-full flex-1"/>
                    <InfoBlock
                        title="Community"
                        text="Our goal is to raise awareness and interest among the people of our community about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives."
                        buttonPath="/about"
                    />
                    <hr className="w-full flex-1"/>
                    <InfoBlock
                        title="Get Involved"
                        text="We are always looking for any help within the club. Whether it be new students to join us, new mentors, or new sponsors to support our team."
                        buttonPath="/join"
                    />
                </div>
        </div>
        </div>
    );
};

export default About;
