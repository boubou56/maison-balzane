import React, { useState, useContext } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  tailleproduit, taillesProduit,
} from '../components/WpProduct.taille.module.css'
import { CartContext } from "../contexts/CartProvider/context"

export default function ProductTaille({ tailles }) {

  const { setCurrentProduct, currentProduct } = useContext(CartContext);
  const [tailleselectionne, setTaille] = useState(null)

  const handleChangeTaille = (selectedTaille) => { /* Jai un doute sur cette ligne*/
    setTaille(selectedTaille);
    setCurrentProduct({
      ...currentProduct,
      taille: selectedTaille
    });
  }
  console.log("ProductTaille", tailles, taillesProduit, tailleproduit, tailleselectionne, currentProduct)

  return (
    <div className={taillesProduit}>
      {tailles.map(taille => (
        <button onClick={() => setTaille(taille.slug)} className={tailleproduit}
          style={{ border: taille.slug === tailleselectionne ? 'solid red' : 'none' }}
          >
            {taille.name}
        </button>

      )
      )
      }
    </div>
  )
}
