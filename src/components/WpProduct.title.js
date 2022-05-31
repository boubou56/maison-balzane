import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  titreproduit, titleproduit, psku, priceproduit
} from '../css/ProductPage.module.css'

export default function ProductTitle({title, sku, price}) {

  console.log("ProductTitle", title, sku, price)
  
  return ( 
    <div className={titleproduit}>
        <h2 className={titreproduit}>{title}</h2>
        <span className={priceproduit}>{price}</span>
        <p className={psku}>{sku}</p>
    </div>
    
  )
}