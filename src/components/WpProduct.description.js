import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  descriptionproduit,
} from '../components/WpProduct.description.module.css'

export default function ProductDescription({description}) {

  console.log("ProductDescription", description, descriptionproduit)
  return (
    <div className={descriptionproduit}>
      {parse(description)}
    </div>
  )
}

       