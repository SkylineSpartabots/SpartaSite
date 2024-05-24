import {useEffect} from "react";
import Splash from "../components/Splash";
import Card from "../components/Card";
import InfoBlock from "../components/InfoBlock";

const HistoryPage = ({
                         year,
                         robotName,
                         robotNameBlurb,
                         splashImage,
                         robotImage,
                         robotInfo,
                         gameVideo,
                         gameName,
                         gameInfo,
                         performance
                     }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Splash
                title={year}
                subtitle={robotName}
                image={splashImage}
            />
            <div className="containerColor flex flex-col gap-8 items-center p-8">
                <Card
                    title={robotName}
                    subtitle={robotNameBlurb}
                    text={robotInfo}
                    image={robotImage}
                    alt={year + " FRC Robot named " + robotName}
                />
                <Card
                    title="CHALLENGE"
                    subtitle={gameName}
                    text={gameInfo}
                    vidurl={gameVideo}
                    alt={year + " FRC Robot named " + robotName}
                />
                <div className="sm:flex sm:flex-col flex-1 px-6 py-8 max-w-[1000px] bgColor rounded-2xl">
                    <h1 className="text-5xl font-scoutcond font-black pb-4 titleColor">PERFORMANCE</h1>
                    <div
                        className="hidden sm:flex flex-row flex-initial px-6 py-8 max-w-[1000px] bgColor rounded">
                        {(performance.map(info => {
                            return (<InfoBlock
                                title={info.title}
                                text={info.text}
                                image={info.image}
                                imageAlt={info.imageAlt}
                            />)
                        }).reduce((a, b) => [a, (
                            <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>), b]))}
                    </div>
                    <div
                        className="sm:hidden flex flex-col flex-initial px-6 py-8 max-w-[1000px] bgColor rounded gap-4">
                        {(performance.map(info => {
                            return (<InfoBlock
                                title={info.title}
                                text={info.text}
                                image={info.image}
                                imageAlt={info.imageAlt}
                            />)
                        }).reduce((a, b) => [a, (<hr className="w-full flex-1"/>), b]))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;