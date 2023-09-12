import React from "react";
import flask from "../assets/flask.png";
import tensorflow from "../assets/tensorflow.png";
import python from "../assets/python.png";
import pytorch from "../assets/pytorch.png";
import node from "../assets/node.png";
import tail from "../assets/tailwind.png";
import react from "../assets/react.png";


const TechStack = () => {
    return (
        <>
            <h1 className="text-5xl dark:text-white font-Pacifico flex justify-center items-center mt-8 pb-5">Tech Stack</h1>
            <div className="flex justify-center"> {/* Wrap the flex container around the images */}
                <div className="flex flex-col items-center p-4">
                    <img className="w-24 h-24 mb-3 mt-2" src={flask} alt="flask" />
                </div>

                <div className="flex flex-col items-center p-4">
                    <img className="w-24 h-24 mb-3 mt-2" src={tensorflow} alt="tensorflow" />
                </div>

                <div className="flex flex-col items-center p-4">
                    <img className="w-24 h-24 mb-3 mt-2" src={python} alt="python" />
                </div>

                <div className="flex flex-col items-center p-4">
                    <img className="w-24 h-24 mb-3 mt-2" src={pytorch} alt="pytorch" />
                </div>

                <div className="flex flex-col items-center p-4">
                    <img className="w-24 h-24 mb-3 mt-2" src={react} alt="react" />
                </div>

                <div className="flex flex-col items-center p-4">
                    <img className="w-24 h-24 mb-3 mt-2" src={tail} alt="tailwind" />
                </div>

                <div className="flex flex-col items-center p-4">
                    <img className="w-24 h-24 mb-3 mt-2" src={node} alt="NodeJS" />
                </div>
            </div>
        </>
    );
};

export default TechStack;
