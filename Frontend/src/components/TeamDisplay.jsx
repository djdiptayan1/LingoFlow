import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import Diptayan from "../assets/Team/Diptayan.jpeg";
import Sukanya from "../assets/Team/sukanya.jpeg";
import Palash from "../assets/Team/Palash.jpeg";
import Suvan from "../assets/Team/Suvan.jpeg";
import Srijit from "../assets/Team/Srijit.jpeg";
import Rudra from "../assets/Team/Rudra.jpeg";

const TeamDisplay = () => {
    // Define the details for each team member
    const teamMembers = [
        {
            name: "Diptayan Jash",
            image: Diptayan,
            githubLink: "#facebook1",
            instagramLink: "#instagram1",
        },
        {
            name: "Sukanya Singh",
            image: Sukanya,
            githubLink: "#facebook2",
            instagramLink: "#instagram2",
        },

        {
            name: "Palash Shah",
            image: Palash,
            githubLink: "#facebook2",
            instagramLink: "#instagram2",
        },
        {
            name: "Suvan",
            image: Suvan,
            githubLink: "#facebook2",
            instagramLink: "#instagram2",
        },
        {
            name: "Srijit Kundu",
            image: Srijit,
            githubLink: "#facebook2",
            instagramLink: "#instagram2",
        },
        {
            name: "Rudrajit Dutta",
            image: Rudra,
            githubLink: "#facebook2",
            instagramLink: "#instagram2",
        },
    ];

    
   

    return (

        <section className="flex flex-col justify-center items-center h-auto my-12">
            <h1 className="text-6xl font-Dance font-medium text-center underline dark:text-white pb-4">Team</h1>
            <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-24">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                ))}
            </div>
                
            
        </section>
    );
};

export default TeamDisplay;
