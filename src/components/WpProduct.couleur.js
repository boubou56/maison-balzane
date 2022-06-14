import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  couleursContairner, couleurs, btncouleurs
} from '../components/WpProduct.couleur.module.css'

const colors = {
  blanc: 'white',
  gris: 'grey',
  marine: '#000073',
  noir: 'black',
};

export default function ProductCouleur({ couleurs }) {

  const [color, setColor] = useState(null)
  console.log("ProductCouleur", couleurs, couleursContairner, color)
  
  return (
    <div className={couleursContairner}>
      {couleurs.map(function (couleur) {

        return (
          <button className={btncouleurs} onClick={() => setColor(couleur)} style={{
            backgroundColor: colors[couleur], border: couleur === color ? 'solid red' : 'none'
          }}>  
          </button>
        )
     
      }
      )
      }
    </div>
  )
}
