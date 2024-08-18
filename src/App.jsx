import { BrowserRouter } from "react-router-dom"
import { About, Contact, EarthCanvas, Experience, Feedbacks, Hero, Navbar, Pricing, Tech, Works, Footer, ScrollToTop } from './components'
import { Analytics } from "@vercel/analytics/react"
// import Sidebar from "./components/Sidebar";
// import { SpeedInsights } from "@vercel/speed-insights/next"


const App = () => {

  return (

    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Analytics />
          <Hero />

        </div>
        <About />
        <Experience />
        <Tech />
        <Pricing />
        <Works />
        <Feedbacks />
        <div className="reaktive z-0">
          <EarthCanvas />
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer />
<ScrollToTop/>
      </div>
    </BrowserRouter>
  )
}

export default App

