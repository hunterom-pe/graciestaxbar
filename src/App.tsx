import { Events } from './components/Events'
import { FindUs } from './components/FindUs'
import { FoodDrink } from './components/FoodDrink'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Inside } from './components/Inside'
import { Marquee } from './components/Marquee'
import { OutBack } from './components/OutBack'

export default function App() {
  return (
    <div className="grain">
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Inside />
        <OutBack />
        <Events />
        <FoodDrink />
        <FindUs />
      </main>
      <Footer />
    </div>
  )
}
