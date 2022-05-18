import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  descriptionproduit,
} from '../../css/ProductPage.module.css'

export default function ProductDescriptionPage() {

  return (
    <Layout>
    <div className={descriptionproduit}>
      {parse(description)}
    </div>
    </Layout>
  )
}
export const query = graphql`
             query($id: String) {
               wpProduct(id: { eq: $id }) {
               description
         }
       }
       `
       