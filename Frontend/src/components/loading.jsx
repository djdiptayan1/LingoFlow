import React from "react";
import loadingGif from "../assets/loading-40.gif"; // Import your custom loading GIF

const LoadingScreen = () => {
    return (
        <div className="z-999">
            <img src={loadingGif} alt="Loading..." className="h-screen w-screen" />
        </div >
    );
};

export default LoadingScreen;
