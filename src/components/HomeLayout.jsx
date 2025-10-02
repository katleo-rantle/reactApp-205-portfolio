import R3fDemo from "./experience/R3fDemo"
import Sidebar from "./Sidebar"

import { Outlet } from "react-router-dom"
const HomeLayout = () => {
  return (
    <>
    <R3fDemo />
    <Sidebar Outlet={Outlet}/>
    </>
  )
}
export default HomeLayout