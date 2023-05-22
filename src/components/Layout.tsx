import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import "../styles.css"
import Hero from "./Hero"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
        </div>
    )
}