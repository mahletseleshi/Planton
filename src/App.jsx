import Navbar from "./Components/NavBar"
import Header from "./Components/Header"
import About from "./Components/About"
import Banner from "./Components/Banner"
import FAQ from "./Components/FAQ"
import FooterBanner from "./Components/FooterBanner"
import Footer from "./Components/Footer"

function App() {


  return (
    <div className="w-[90%] h-[100%] mx-auto">
      <Navbar />
      <Header />
      <About />
      <Banner />
      <FAQ />
      <FooterBanner />
      <Footer />
    </div>
  )
}

export default App
