import { Navbar } from "../components/NavBar"
import { Hero } from "../components/Hero"
import styles from "./NotFound.module.css"
import { Footer } from "../components/Footer"

export function NotFound() {
    return(
        <>
        <Navbar/>
        <Hero first="404" second="NOT FOUND"/>
        <div className={styles["example"]}>
            <h1>404 NOT FOUND</h1>
        </div>
        <Footer/>
        </>
    )
}