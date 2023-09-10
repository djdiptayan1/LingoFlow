import React from 'react'
import Hero from './hero'
import TranslationCard from "./TranslationCard";
import CardDefaults from "./CardDefault";
import DialogWithForm from "./DialogWithForm";

const landing_page = () => {
    return (
        <>
            <Hero />
            <TranslationCard />
            <CardDefaults />
            <DialogWithForm />
        </>
    )
}

export default landing_page