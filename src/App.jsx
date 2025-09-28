import About from "./components/About";
import R3fDemo from "./components/experience/R3fDemo";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
    <Sidebar />
      <R3fDemo/>
      {/* <Navbar />
      <Hero />
      <Skills/>
      <About/>
      <Projects/> */}
    </>
  );
}
export default App