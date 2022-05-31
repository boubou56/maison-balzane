import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  tailleproduit, taillesProduit,
} from '../css/ProductPage.module.css'

export default function ProductTaille({ tailles }) {

  console.log ("ProductTaille", tailles, taillesProduit, tailleproduit)
  return (    
    <div className={taillesProduit}>
      {tailles.map(taille => (
        <p className={tailleproduit}>{taille.name}</p>
      ))}
    </div>
  )
}
