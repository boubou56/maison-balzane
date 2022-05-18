import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  titreproduit,
} from '../../css/ProductPage.module.css'

export default function ProductTitlePage() {

  const {//champs de premier niveau
    id, name, sku,
  } = props.data.wpProduct;


  return (
    <h2 className={titreproduit}>{name.sku.slug}</h2>
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
 


  