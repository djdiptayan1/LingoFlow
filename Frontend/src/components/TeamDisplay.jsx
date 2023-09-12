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

    // Split the team members into two rows
    const firstRow = teamMembers.slice(0, 3);
    const secondRow = teamMembers.slice(3);

    return (

        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-5xl font-Pacifico text-center underline dark:text-white pb-4">Team</h1>
                <div className="flex flex-wrap">
                    {/* Render the first row */}
                    {firstRow.map((member, index) => (
                        <div key={index} className="w-full md:w-1/3 p-2">
                            <TeamMemberCard {...member} />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap mt-4">
                    {/* Render the second row */}
                    {secondRow.map((member, index) => (
                        <div key={index} className="w-full md:w-1/3 p-2">
                            <TeamMemberCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamDisplay;
