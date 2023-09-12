import React from 'react'
import Hero from './hero'
import CardDefaults from "./CardDefault";
import DialogWithForm from "./DialogWithForm";
import TeamDisplay from "./TeamDisplay";
import Tlembed from "./Tlembed";
import TechStack from './TechStack';
import backgroungimg from "../assets/background.png"

const landing_page = () => {
        const backgroundStyle = {
            backgroundImage: `url(${backgroungimg})`,
            backgroundSize: "cover", // Adjust to your needs
            backgroundPosition: "center center", // Adjust to your needs
            backgroundRepeat: "no-repeat", // Adjust to your needs
            // Apply blur effect using backdrop-filter
        };
    return (
        <>
            <div className=' min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-700' style={backgroundStyle}>
                <Hero />
                {/* <CardDefaults /> */}
                <DialogWithForm />
                <TechStack />
                <TeamDisplay />
                <Tlembed />
            </div>
        </>
    )
}

export default landing_page