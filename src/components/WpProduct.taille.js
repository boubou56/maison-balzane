import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  tailleproduit,
} from '../components/ProductPage.module.css'

export default function ProductTaille({ tailles }) {

  console.log ("ProductTaille", tailles)
  return (    
    <div className={tailleproduit}>
      
      {tailles.map(taille => (
        <p className={tailleproduit}>{taille}</p>
      ))}
    </div>
  )
}