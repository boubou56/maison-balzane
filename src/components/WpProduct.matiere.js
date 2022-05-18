import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  matiereproduit,
} from '../../css/ProductPage.module.css'

export default function ProductMatierePage() {
  return (
    <div className={matiereproduit}>
      {allPaMatiere.nodes.map(matiere => (
        <p className={matiereproduit}>{matiere.name}</p>
      ))}

    </div>
  )
}


export const query = graphql`
        query($id: String) {
          wpProduct(id: { eq: $id }) {
          allPaMatiere {
            nodes {
              name
            }
          }
        }
      }
      `