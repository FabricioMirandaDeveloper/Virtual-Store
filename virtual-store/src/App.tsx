import "./module.css"
import { Navbar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Home } from "./views/Home"

export function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Home/>
    <Footer/>
    </>
  )
}