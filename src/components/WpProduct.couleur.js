import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  couleursContairner,
} from '../components/WpProduct.couleur.module.css'

const colors = {
  blanc: 'white',
  gris: 'grey',
  marine: '#000073',
  noir: 'black',
};

export default function ProductCouleur({ couleurs }) {

  console.log("ProductCouleur", couleurs, couleursContairner)
  return (
    <div className={couleursContairner}>
      {couleurs.map(function (couleur) {
        return (
          <div style={{
            backgroundColor: colors[couleur],
          }}> 
          </div>
        )
      }
      )}
    </div>
  )
}
