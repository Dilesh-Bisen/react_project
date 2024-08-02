import React from 'react'
import HeroSection from '../../components/hero_section'
import About from '../../components/about'
import Qualities from '../../components/qualities'
import Menu from '../../components/menu'
import WhoAreWe from '../../components/who_are_we'
import Team from '../../components/team'
import Reservation from '../../components/reservation'
import Footer from '../../components/footer'

const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Qualities />
            <Menu />
            <Reservation />
            <WhoAreWe />
            <Team />
            <Footer /> 
        </>
    )
}

export default Home