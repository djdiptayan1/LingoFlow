import React from "react";
import insta from "../assets/instagram.png";
import github from "../assets/github.png";

const TeamMemberCard = ({ name, image, githubLink, instagramLink }) => {
  return (
    <div className="w-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
      <div className="flex flex-col items-center pb-1">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg mt-2" src={image} alt={`${name}'s image`} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        {/* Add social media links or other details here */}
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a href={githubLink} className="inline-flex items-center px-4 py-2">
            <img src={github} className="h-12 w-12" />
          </a>
          <a href={instagramLink} className="inline-flex items-center px-4 py-2">
            <img src={insta} className="h-12 w-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
