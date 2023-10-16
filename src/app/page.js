import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <main>
      <h1> Hello world</h1>
      <HeroSection/>
      <AboutMe/>
    </main>
  )


}
