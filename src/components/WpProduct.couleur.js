import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  couleurproduit,
} from '../components/ProductPage.module.css'

export default function ProductCouleur({ couleurs }) {

  console.log("ProductCouleur", couleurs)
  return (
    <div className={couleurproduit}>

      {couleurs.map(function (couleur) {
        return (
          <div className={`${couleur.slug}`}> </div>
        )
      }
      )}
    </div>
  )
}
