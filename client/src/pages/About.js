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
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis%20In%20Game%20Dim.webp"}/>
            <div className={`containerColor flex flex-col gap-8 items-center p-8`}>
                <Card // TODO Allow for newlines in text to break them up a bit
                    title="CLUB OVERVIEW"
                    text="We are the Spartabots, a robotics club participating in the FIRST Robotics Competition as team 2976. In six weeks, our completely student run team, utilizes our problem solving, critical thinking, as well analytical abilities to create a robot. The club was created in 2008 and initially worked in the garage of one of our mentors. In the first few years of the club we struggled, but always managed to bring a robot to competitions. During that time, our team never managed to advance to the elimination rounds of any competitions, but by 2014, the Spartabots had made it through two district competitions, getting second place in one of them, and qualified for regionals. Since then, we've won the World Championship (2018) and qualified for World's 4 times, making us one of the most successful teams in the Pacific Northwest."
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/FIRST%20Logo%20Team.webp"} // team photo, maybe something older
                    alt="Group photo of the Spartabots team in front of the FIRST logo"
                />
                <Card
                    title="OUR MISSION"
                    text="Our mission is to inspire students in the fields of science, technology, engineering and math. We help students cultivate these skills through being a part of a collaborative team that learns and grows together."
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/About.js_Outreach_close_up_horiz_wmw5wu.jpg"} // Outreach close up of interaction
                    alt="Spartabots members explain ARTEMIS to children at Cedar Trails Elementary"
                    allowLinks="true"
                />
                <Card
                    title="COMMUNITY" // TODO shorten the below text - or make it wrap around the image? - image restrained size um
                    text="One of our goals is to raise awareness and interest about our club as well as fields in science and technology among the people in our community. Partnering with community members and local companies allows to raise sufficient funds to support our club mission and objectives. During the school year, our team participates in local elementary school science fairs where younger students can learn about our robotics team. Local community festivals such as Salmon Days provide us with a great venue to showcase our club. We stay active during the summer months by manning a booth at the Issaquah Farmer’s Market to raise awareness and create interest in our program. This is a great way for the community to see our robots first hand. Summer is a fun time for our team to participate in local parades and get involved in various community projects where we can give back to our community while creating awareness of our club. To further our mission and grow our club, we have put together various ideas of outreach within our school. We will have a presence on our school website and our Facebook page will connect us with more students and faculty. Morning school assembly is a great place for us to showcase our robot and advertise our club, creating awareness and excitement among our students. Posters and flyers are being designed and posted at various parts of the school to inform and attract new recruits. Our club plans a booth during freshman orientation night allowing incoming students to get a preview of our club. We are also planning an “Awareness Night”, where we will take the opportunity to bring together and thank our school, sponsors and dedicated mentors for their hard work and support. Without them our team would not exist and we would like to show our appreciation by providing a relaxing evening with a presentation of what their contributions helped our team achieve."
                    image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/about.js_about_to_catch_outreach_amielb.jpg"} // Outreach close up of interaction
                    alt="ARTEMIS launches a note for a child to catch at Cedar Trails Elementary"
                    allowLinks="true"
                />
                <Card
                    title="SPONSORS"
                    text="Skyline Robotics couldn't exist without the support of our sponsors, who help us in a variety of ways from granting money to donating parts. If you're interested in helping to sponsor our club, please send us an email!"
                    image={"https://res.cloudinary.com/spartasite/image/upload/v1715152598/2024%20Sponsor%20Banner.webp"} // TODO make it a picture of the
                    alt="Sponsor panel on ZEUS"
                />
                {/*// prolly remove these info blocks dont need them but will keep for now*/}
                {/*<div style={{backgroundColor: "var(--bgColor)"}}*/}
                {/*     className="hidden sm:flex flex-row flex-initial px-6 py-8 max-w-[1000px] rounded-2xl gap-4">*/}
                {/*    <InfoBlock*/}
                {/*        title="Our Sponsors"*/}
                {/*        text="The Spartabots wouldn't exist without the support of our gracious sponsors, who help us in a variety of ways from granting money to donating parts."*/}
                {/*        buttonPath="/sponsors"*/}
                {/*    />*/}
                {/*    <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>*/}
                {/*    <InfoBlock*/}
                {/*        title="Community"*/}
                {/*        text="Our goal is to raise awareness and interest among the people of our community about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives."*/}
                {/*        buttonPath="/about"*/}
                {/*    />*/}
                {/*    <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>*/}
                {/*    <InfoBlock*/}
                {/*        title="Get Involved"*/}
                {/*        text="We are always looking for any help within the club. Whether it be new students to join us, new mentors, or new sponsors to support our team."*/}
                {/*        buttonPath="/join"*/}
                {/*    />*/}
                {/*</div>*/}

                {/*<div style={{backgroundColor: "var(--bgColor)"}}*/}
                {/*     className="sm:hidden flex flex-col flex-initial px-8 py-8 w-full items-center bg-white rounded-2xl gap-4">*/}
                {/*    <InfoBlock*/}
                {/*        title="Our Sponsors"*/}
                {/*        text="The Spartabots wouldn't exist without the support of our gracious sponsors, who help us in a variety of ways from granting money to donating parts."*/}
                {/*        buttonPath="/sponsors"*/}
                {/*    />*/}
                {/*    <hr className="w-full flex-1"/>*/}
                {/*    <InfoBlock*/}
                {/*        title="Community"*/}
                {/*        text="Our goal is to raise awareness and interest among the people of our community about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives."*/}
                {/*        buttonPath="/about"*/}
                {/*    />*/}
                {/*    <hr className="w-full flex-1"/>*/}
                {/*    <InfoBlock*/}
                {/*        title="Get Involved"*/}
                {/*        text="We are always looking for any help within the club. Whether it be new students to join us, new mentors, or new sponsors to support our team."*/}
                {/*        buttonPath="/join"*/}
                {/*    />*/}
                {/*</div>*/}
        </div>
        </div>
    );
};

export default About;
