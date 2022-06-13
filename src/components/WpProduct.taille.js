import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  tailleproduit, taillesProduit,
} from '../components/WpProduct.taille.module.css'

export default function ProductTaille({ tailles }) {

  const [taille, setTaille] = useState(tailles)

  console.log ("ProductTaille", tailles, taillesProduit, tailleproduit)
  return (    
    <div className={taillesProduit}>
      {tailles.map(taille => (
        <button onClick={() => setTaille({tailles})} className={tailleproduit}>{taille.name}</button>
      ))}
    </div>
  )
  // return(
  //   <div>
  //        <p>Vous avez cliqué {taille} </p>   
  //       <button onClick={() => setTaille({tailles})}>
  //       Cliquez ici
  //       </button>
  //       </div> 
  // )
}
