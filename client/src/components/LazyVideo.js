import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export const LazyVideo = ({ src, type, className, autoPlay, loop, muted, playsInline }) => {
    const videoRef = useRef();
    const [visible, setVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // State for video playback

    useEffect(() => {
        const videoRefCurrent = videoRef.current;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (videoRefCurrent) {
            observer.observe(videoRefCurrent);
        }

        return () => {
            if (videoRefCurrent) {
                observer.unobserve(videoRefCurrent);
            }
            observer.disconnect();
        };
    }, []);

    const togglePlayback = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <video
                ref={videoRef}
                src={visible ? src : ""}
                type={type}
                className={className}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                playsInline={playsInline} />
            {visible && (
                isPlaying
            )}
            <button style={{
                position: "absolute",
                bottom: 50,
                right: 50,
                fontSize: '2em',
                color: 'white',
                zIndex: "1"
            }}
                aria-label="play and pause button"
                onClick={togglePlayback}>
                <FontAwesomeIcon icon={isPlaying ? faPlay : faPause} />
            </button>
        </div>

    );
};
