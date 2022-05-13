import * as React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { bandeau, 
  livraison,
  blocHeader,titreh1} from '../css/header.module.css'
  import NavBar from './nav-bar'

// Step 1: Import the useStaticQuery hook and graphql tag
import { StaticImage } from 'gatsby-plugin-image'
const Header = () => {

  /* Step 2: Use the useStaticQuery hook and
    graphql tag to query for data
    (The query gets run at build time) */
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={bandeau}>
      
      <section className={livraison}>
               <p> Livraison Gratuite en France métropolitaine à partir de 150€ d'achat </p>
      </section>    

      <div class={blocHeader}>
              <NavBar/>
      
      </div>

      <h1 className={titreh1}>{ data.site.siteMetadata.title }</h1>
    </header>
  )
}
export default Header