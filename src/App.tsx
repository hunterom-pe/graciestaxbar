import { Events } from './components/Events'
import { FindUs } from './components/FindUs'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Scene } from './components/Scene'

/**
 * Four moments, one continuous page:
 * 1. Hero  2. Inside → Out Back  3. Events (two posters)  4. Find us + footer
 */
export default function App() {
  return (
    <div className="grain">
      <Header />
      <main id="main">
        <Hero />
        <Scene />
        <Events />
      </main>
      <FindUs />
    </div>
  )
}
