import React from 'react'
import Hero from './hero'
import CardDefaults from "./CardDefault";
import DialogWithForm from "./DialogWithForm";
import TeamDisplay from "./TeamDisplay";
import Tlembed from "./Tlembed";

const landing_page = () => {
    return (
        <>
            <div className=' min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-700'>
                <Hero />
                <CardDefaults />
                <DialogWithForm />
                <TeamDisplay />
                <Tlembed />
            </div>
        </>
    )
}

export default landing_page