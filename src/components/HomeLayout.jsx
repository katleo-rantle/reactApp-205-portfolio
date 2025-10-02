import Experience from "./experience/Experience"
import Sidebar from "./Sidebar"

import { Outlet } from "react-router-dom"
const HomeLayout = () => {
  return (
    <>
    <Sidebar Outlet={Outlet}/>
    <Experience />
    </>
  )
}
export default HomeLayout