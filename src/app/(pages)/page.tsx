import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import History from '../components/sections/History'
import Location from '../components/sections/Location'
import FAQ from '../components/sections/FAQ'
import ContactForm from '../components/sections/ContactForm'
import FeaturedProducts from '../components/sections/FeaturedProducts'

export default function page() {
    return (
        <>
            <Hero />
            <About />
            <FeaturedProducts />
            <Location />
            <History />
            <FAQ />
            <ContactForm />
        </>
    )
}
