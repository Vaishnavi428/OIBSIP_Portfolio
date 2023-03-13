import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a friendly Front-End Developer."/>
      <Content />
      <Footer />
    </div>
  )
}

export default About