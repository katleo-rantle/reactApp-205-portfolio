import About from "./components/About";
import Experience from "./components/experience/Experience";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
    <Sidebar />
      <Experience/>
      {/* <Navbar />
      <Hero />
      <Skills/>
      <About/>
      <Projects/> */}
    </>
  );
}
export default App