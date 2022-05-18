import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  matiereproduit,
} from '../../css/ProductPage.module.css'

export default function ProductMatierePage() {
  return (

    <Layout>
    <div className={matiereproduit}>
      {allPaMatiere.nodes.map(matiere => (
        <p className={matiereproduit}>{matiere.name}</p>
      ))}
    </div>
    </Layout>
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