import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  couleurproduit,
} from '../../css/ProductPage.module.css'

export default function ProductCouleurPage() {

  console.log(props.data.wpProduct)
  return (
    <div className={couleurproduit}>
      {allPaCouleur.nodes.map(couleur => (
        <p className={couleurproduit}>{couleur.name.slug}</p>
      ))}
    </div>
  )
}

export const query = graphql`
        query($id: String) {
          wpProduct(id: { eq: $id }) {
          allPaCouleur {
      nodes {
        id
        name
        slug
      }
    }
  }
  `