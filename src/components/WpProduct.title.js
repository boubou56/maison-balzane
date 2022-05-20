import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  titreproduit, titleproduit,
} from '../components/ProductPage.module.css'

export default function ProductTitle({title, sku}) {
console.log("ProductTitle", title, sku)
  return ( 
    <div className={titleproduit}>
        <h2 className={titreproduit}>{title}</h2>
        <p className={sku}>{sku}</p>
    </div>
  )
}