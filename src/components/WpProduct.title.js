import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  titreproduit, titleproduit, psku, priceproduit
} from '../components/WpProduct.title.module.css'
import { CartContext } from "../contexts/CartProvider/context"

export default function ProductTitle({title, sku, price}) {

  const {currentProduct, addToCart, cart} = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      ...currentProduct, 
      sku,
      price
    });
  }

  console.log("ProductTitle", title, sku, price, cart);
  
  return ( 
    <div className={titleproduit}>
        <h2 className={titreproduit}>{title}</h2>
        <span className={priceproduit}>{price}</span>
        <p className={psku}>{sku}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
    </div>
    
  )
}