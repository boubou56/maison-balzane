import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  titreproduit,
} from '../components/ProductPage.module.css'

export default function ProductTitlePage(props) {

  const {//champs de premier niveau
    id, name, sku,
  } = props.data.wpProduct;

  console.log(props.data.wpProduct)

  return (
    
    <Layout>
    <h2 className={titreproduit}>{name.sku.slug}</h2>
    </Layout>
  )
}

export const query = graphql`
          query($id: String) {
            wpProduct(id: { eq: $id }) {     
              id
              name
              sku
              slug
            }
          }
          `
 


  