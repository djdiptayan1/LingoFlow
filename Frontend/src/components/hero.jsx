import React from "react";
import "animate.css";
import "../App.css"
import { Box } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../assets/sihlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import herobg from "../assets/bg2.jpeg";

const hero = () => {
    return (
        <section className="section-bg shadow-2xl flex flex-col justify-center items-center h-screen">
            <Box className="h-screen w-11/12 flex flex-row gap-12 justify-center items-center">
                <Logo />
                <h1 className="font-Prism font-medium text-9xl text-white">LingoFlow</h1>
            </Box>

            {/* Centered "Scroll down" text with arrow */}
            <div className="flex flex-col items-center text-white mb-4">
                <p className="animate__animated animate__bounce mb-4 text-2xl sm:text-3xl">
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
