import  React, {Fragment} from "react"
import Navbar from "../components/header/navbar"
import Header from "../components/header/header"
import OurServices from "../components/our-services/our-services"
import '../css/index.css';

export default function Home() {
  return <Fragment>
    <Header/>
    <OurServices/>
    <Navbar/>
  </Fragment>
}
