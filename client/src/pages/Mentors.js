import Splash from "../components/Splash";
import InfoBlock from "../components/InfoBlock";

const Mentors = ({mentors}) => {
    var rows = [];
    var row = [];

    for (var e of mentors) {
        row.push(e);
        if (row.length >= 3) {
            rows.push(row);
            row = [];
        }
    }

    if (row.length > 0) {
        /*for (var i = row.length; i < 3; i++) {
            row.push({});
        }*/
        rows.push(row);
    }

    return (
        <div>
            <Splash
                title="OUR MENTORS"
                subtitle="2009 — 2024"
                image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/RobotBlur"}
            />
            <div className="containerColor flex flex-col gap-8 items-center p-8">
                {(rows.map(row => 
                <div className="hidden sm:flex flex-row flex-initial px-6 py-8 max-w-[1000px] bgColor rounded">
                        {(row.map(info => {
                            return (<InfoBlock
                                title={info.name}
                                text={info.text}
                                image={info.portrait}
                                imageAlt={"Portrait photo of " + info.name + "."}
                            />)
                        }).reduce((a, b) => [a, (<div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>), b]))}
                </div>))}
            </div>
        </div>
    );
};

export default Mentors;