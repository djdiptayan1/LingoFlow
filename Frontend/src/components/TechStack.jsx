import React from "react";
import flask from "../assets/flask.png";
import tensorflow from "../assets/tensorflow.png";
import python from "../assets/python.png";
import pytorch from "../assets/pytorch.png";
import node from "../assets/node.png";
import tail from "../assets/tailwind.png";
import react from "../assets/react.png";

const imglist = [
    "https://i.postimg.cc/mhxb6Spr/flask.png",
    "https://i.postimg.cc/y1Q0LSjX/tensorflow.png",
    "https://i.postimg.cc/9MKRCZg6/python.png",
    "https://i.postimg.cc/02mm5Xsc/pytorch.png",
    "https://i.postimg.cc/9XDZKFN3/node.png",
    "https://i.postimg.cc/52VzX591/tailwind.png",
    "https://i.postimg.cc/R0CnRMnD/react.jpg",
    
]


const TechStack = () => {
    return (
        <>
            <h1 className="dark:text-white text-6xl font-Dance font-medium  flex justify-center items-center mt-8 pb-5">Tech Stack</h1>
            
            <section className="flex md:flex-row flex-wrap justify-center items-center">
                {imglist.map((img, index) => (
                    <div id={index} className="flex flex-col items-center p-4">
                        <img className="w-auto h-24 mb-3 mt-2" src={img} alt="flask" />
                    </div>
                ))}
            </section>
        </>
    );
};

export default TechStack;
