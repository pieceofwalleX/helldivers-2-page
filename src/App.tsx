import { About } from "./components/ui/Home/About";
import { Footer } from "./components/ui/Footer";
import { Hero } from "./components/ui/Home/Hero";
import { Video } from "./components/ui/Home/Video";
import { Navbar } from "./components/ui/Navbar";

export function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Video/>
      <Footer/>
    </>
  )
}

