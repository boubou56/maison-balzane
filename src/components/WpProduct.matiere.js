import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  matiereproduit,
} from '../css/ProductPage.module.css'

export default function ProductMatiere({ matieres }) {
  console.log ("ProductMatiere", matieres)
  return (
    <div className={matiereproduit}>
      {matieres.map(matiere => (
        <p className={matiereproduit}>{matiere}</p>
      ))}
    </div>
  )
}

