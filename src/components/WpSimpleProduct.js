import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  priceproduit,
} from '../../css/ProductPage.module.css'

export default function SimpleProductPage() {
  return (
    <div className={priceproduit}> {props.price} </div>
  )
}
export const query = graphql`
             query($id: String) {
               wpProduct(id: { eq: $id }) {
                ... on WpSimpleProduct {
                price
            }
       }
    }
`

        