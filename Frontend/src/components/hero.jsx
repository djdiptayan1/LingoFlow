import React from "react";
import "animate.css";
import "../App.css"
// import heroimg from "../assets/hero2.png";
import { Box } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../assets/sihlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import herobg from "../assets/bg2.jpeg";

const hero = () => {
    

    return (
        <section className="section-bg shadow-2xl flex flex-col justify-center items-center">
            
                <Box  className="h-screen w-11/12 flex flex-row gap-12 justify-center items-center " >
                    <Logo />
                    <h1 className=" font-Prism font-medium text-9xl">LingoFlow</h1>
                </Box>

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
            
        </section>
    );
};

export default hero;
