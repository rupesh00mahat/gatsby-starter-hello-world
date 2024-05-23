import * as React from "react"
import Navbar from "../components/header/navbar"
import Header from "../components/header/header"
import { Fragment } from "react"
import OurServices from "../components/our-services/our-services"

export default function Home() {
  return <Fragment>
    <Navbar/>
    <Header/>
    <OurServices/>
  </Fragment>
}
