import About from "./components/About";
import Hero from "./components/Hero"
import HomeLayout from "./components/HomeLayout";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

import {createBrowserRouter, RouterProvider} from "react-router-dom"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children: [
        {
          path: "about",
          element: <About/>
        },
        {
          path: "projects",
          element: <Projects/>
        },
        {
          path: "contact",
          element: <h1>Im contact page Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid expedita omnis delectus. Ullam corrupti et dicta cum nam perferendis neque culpa hic dolores eaque repellat ipsa minima saepe, mollitia rem velit veniam sunt quo nemo recusandae quidem accusantium architecto officia placeat. Earum eos, nulla quibusdam alias sint perspiciatis non?</h1>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}
export default App