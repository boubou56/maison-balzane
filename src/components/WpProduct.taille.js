import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  tailleproduit, taillesProduit,
} from '../components/WpProduct.taille.module.css'

export default function ProductTaille({ tailles }) {

  const [tailleselectionne, setTaille] = useState(null)

  console.log("ProductTaille", tailles, taillesProduit, tailleproduit, tailleselectionne)
  return (
    <div className={taillesProduit}>
      {tailles.map(taille => (
        <button onClick={() => setTaille(taille.slug)} className={tailleproduit}
          style={{ border: taille.slug === tailleselectionne ? 'solid red' : 'none' }}>{taille.name}</button>
      ))}
    </div>
  )
}
