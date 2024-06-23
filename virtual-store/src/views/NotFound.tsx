import { Navbar } from "../components/NavBar"
import { Footer } from "../components/Footer"

export function NotFound() {
    return(
        <>
        <Navbar/>
        <div className="text-red-700 flex justify-center items-center text-7xl h-40 font-bold">
            <h1>404 NOT FOUND</h1>
        </div>
        <Footer/>
        </>
    )
}