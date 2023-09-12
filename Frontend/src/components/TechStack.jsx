import React from "react";
import insta from "../assets/instagram.png";
import github from "../assets/github.png";

const TechStack = () => {
    return (
        <div className="w-56">
            <h1 className="text-5xl text-white font-Pacifico">Tech Stack</h1>
            <div className="flex flex-col items-center pb-1">
                <img className="w-24 h-24 mb-3 shadow-lg mt-2" src= {insta} alt={`${name}'s image`} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
            </div>
        </div>
    );
};

export default TechStack;
