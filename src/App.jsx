import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import SocialConnections from './components/SocialConnections'
// import ImageCursorTrail from "./components/ui/image-cursortrail"
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
import ExperienceSection from './components/ExperienceSection'

import { TextScroll } from "./components/ui/text-scroll";
import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'

const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]


function App() {
    const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
    <ReactLenis root />
      <Navbar />
    


      <HeroSection />


  <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-white dark:text-white md:text-8xl md:leading-[5rem] md:tracking-tighter"
      text=" Shiv kumar ?  "
      default_velocity={6}
    />
      <IntroSection />
      <SkillsSection />
      <ServicesSection />
<ExperienceSection />
      <ProjectsSection />

{/* <section className="w-full bg-black py-12 border-b-2 border-t-2 border-white">
  <div className="max-w-4xl mx-auto px-4">
    <ImageCursorTrail
      items={images}
      maxNumberOfImages={5}
      distance={25}
      imgClass="sm:w-40 w-28 sm:h-48 h-36" // Added white border to images
      className="rounded-3xl border-2 border-white" // Added white border to container
    >
      <article className="relative z-50 flex flex-col items-center justify-center">
        <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight text-white">
          Images That Follow the Cursor Cooool Right
        </h1>
      </article>
    </ImageCursorTrail>
  </div>
</section> */}

      <SocialConnections />


      
<Footer />
    </>
  )
}

export default App
