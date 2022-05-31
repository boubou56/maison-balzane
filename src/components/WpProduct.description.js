import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  descriptionproduit,
} from '../components/WpProduct.description.module.css'

export default function ProductDescription({description}) {

  return (
    <div className={descriptionproduit}>
      {parse(description)}
    </div>
  )
}

       