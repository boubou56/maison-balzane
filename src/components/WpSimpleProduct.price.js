import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  priceproduit,
} from '../components/ProductPage.module.css'

export default function SimpleProductPrice({ prices }) {
  console.log("SimpleProduct", prices)
  return (

    <div className={priceproduit}>
      {prices.map(function (price) {
        return (
          <div className={`${price}`}></div>
        )
      }
      )
      }
    </div>
    
  )
}
    