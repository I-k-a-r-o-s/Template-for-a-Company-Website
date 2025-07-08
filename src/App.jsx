import './App.css'
// Import all main sections/components of the website
import Hero from './components/Hero'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Purpose from './components/Purpose'
import Features from './components/Features'
import Schedule from './components/Schedule'
import Monitor from './components/Monitor'
import Pricing from './components/Pricing'
import Services from './components/Services'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

// The main App component that renders the entire webpage
function App() {
  return (
    <>
      {/* Main content area with relative positioning and minimum height */}
      <main className="relative min-h-screen overflow-x-hidden" >
        {/* Decorative blurred color background effect on the left side */}
        <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 
        to-pink-500/20 rounded-full blur-[80px] -z-10'></div>
        {/* Main content wrapper with overflow hidden to prevent unwanted scrollbars */}
        <div className="overflow-hidden">
          {/* Fixed navigation bar at the top */}
          <Navbar />
          {/* Hero section: main heading and call to action */}
          <Hero />
          {/* Logo marquee section */}
          <Logo />
          {/* Purpose/mission statement section */}
          <Purpose />
          {/* Features section: highlights key features */}
          <Features />
          {/* Schedule section: information about scheduling */}
          <Schedule />
          {/* Monitor section: information about monitoring */}
          <Monitor/>
          {/* Pricing section: pricing plans and slider */}
          <Pricing />
          {/* Services section: list of services offered */}
          <Services />
          {/* Newsletter signup section */}
          <NewsLetter/>
          {/* Footer: company info, links, and social media */}
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
