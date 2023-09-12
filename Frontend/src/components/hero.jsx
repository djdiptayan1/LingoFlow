import React from "react";
import "animate.css";
import heroimg from "../assets/hero2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import herobg from "../assets/bg2.jpeg";

const hero = () => {
    const backgroundStyle = {
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover", // Adjust to your needs
        backgroundPosition: "center center", // Adjust to your needs
        backgroundRepeat: "no-repeat", // Adjust to your needs
        // Apply blur effect using backdrop-filter
        backdropFilter: "blur(40px)", // Adjust the blur strength as needed
    };

    return (
        <>
            <div className="h-screen w-screen" style={backgroundStyle}>
                <img src={heroimg} alt="hero" className="h-screen w-screen z-999" />

                {/* Scroll down animated text with arrow */}
                <div className="absolute bottom-0 flex flex-col items-center left-1/2 transform -translate-x-1/2 text-white mb-4">
                    <p className="animate__animated animate__bounce mb-4 text-2xl sm:text-3xl ">
                        Scroll down
                    </p>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="animate__animated animate__fadeInDown animate__infinite animate__slow animate__delay-1s text-3xl"
                    />
                </div>
            </div>
        </>
    );
};

export default hero;
