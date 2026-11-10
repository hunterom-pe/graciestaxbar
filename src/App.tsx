import { EatDrink } from './components/EatDrink'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Inside } from './components/Inside'
import { Patio } from './components/Patio'
import { Scene } from './components/Scene'
import { Visit } from './components/Visit'

export default function App() {
  return (
    <div className="grain">
      <Header />
      <main id="main">
        {/* Act I: arrival, red light */}
        <Hero />
        <Inside />
        {/* Act II: the bar, the noise */}
        <EatDrink />
        <Scene />
        {/* Act III: out back, everybody */}
        <Patio />
        <Events />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
