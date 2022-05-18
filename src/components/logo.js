import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import {logo} from '../css/header.module.css'


export default function Logo() {
  return (
   <div className={logo}>

    <StaticImage src={{logoUrl:"logoUrl", name:"name"}}/>
    
    </div>
    )
}

