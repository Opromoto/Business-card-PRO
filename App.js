import React from "react"
import { InfoWeb, Info } from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

function App() {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

function AppWeb() {
    return (
        <div>
            <InfoWeb />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export { AppWeb, App } 