import React from "react";
import insta from "../assets/instagram.png";
import github from "../assets/github.png";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  ButtonGroup,

} from '@chakra-ui/react'

import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const TeamMemberCard = ({ name, image, githubLink, instagramLink }) => {
  return (
    
      <Card h='lg' w='sm'>
        <CardBody>
          <Image
            src={image}
            alt={`${name}'s image`}
            borderRadius='lg'
            size='sm'
            w='sm'
            h='sm'
          />
          <Heading size='md'>{name}</Heading>
        </CardBody>
        <Divider />
        <CardFooter>
          <button onClick={() => {window.open(githubLink)}} className="mx-4 text-teal-600 hover:text-teal-900"><AiFillGithub/></button>
          <button onClick={() => {window.open(instagramLink)}} className="mx-4 text-teal-600 hover:text-teal-900"><AiOutlineInstagram/></button>
        </CardFooter>
      </Card>
  
  );
};

export default TeamMemberCard;
