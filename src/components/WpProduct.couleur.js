import React, { useState, useContext } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  couleursContairner, couleurs, btncouleurs
} from '../components/WpProduct.couleur.module.css'
import { CartContext } from "../contexts/CartProvider/context"

const colors = {
  blanc: 'white',
  gris: 'grey',
  marine: '#000073',
  noir: 'black',
};

export default function ProductCouleur({ couleurs }) {

  const {setCurrentProduct, currentProduct} = useContext(CartContext);
  const [color, setColor] = useState(null);

  const handleChangeColor = (selectedColor) => {
    setColor(selectedColor);
    setCurrentProduct({
      ...currentProduct,
      color: selectedColor
    });
  }

  console.log("ProductCouleur", couleurs, couleursContairner, color, currentProduct);

  
  return (
    <div className={couleursContairner}>
      {couleurs.map(function (couleur) {

        return (
          <button className={btncouleurs} onClick={() => handleChangeColor(couleur)} style={{
            backgroundColor: colors[couleur], 
          }}> 
          
          </button>
        )
     
      }
      )
      }
    </div>
  )
}
