import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  tailleproduit,
} from '../../css/ProductPage.module.css'

export default function ProductTaille() {

  return (
    <Layout>
    <div className={tailleproduit}>
      {allPaTaille.nodes.map(taille => (
        <p className={tailleproduit}>{taille.name}</p>
      ))}
    </div>
    </Layout>
  )
}

export const query = graphql`
             query($id: String) {
               wpProduct(id: { eq: $id }) {
               allPaTaille {
                nodes {
                name
                slug
            }
         }
       }
    }   
    `
