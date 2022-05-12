import * as React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { bandeau, 
  livraison,
  blocHeader,
  menuprincipal,
  menuToggle,
  logo,
  menu,} from '../css/header.module.css'

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
              <nav className={menuprincipal}>

              <label className={menuToggle} for="menu-toggle"></label>
              <input type="checkbox" className="menu-toggle"/>
              <StaticImage className={logo} alt="XXXXXXX" src="../images/Logo-allonge.jpg"> </StaticImage>

              <ul className={menu}>

                  <li><Link to="/index">Accueil</Link></li>
                  <li><Link to="/homme">Homme</Link></li>
                  <li><Link to="/femme">Femme</Link></li>
                  <li><Link to="/accessoires">Accessoires</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="apropos">À propos</Link></li>
                  <li><Link to="#">search<i class="fa-solid fa-magnifying-glass"></i></Link></li>
                  <li><Link to="#">compte<i class="fa-solid fa-user"></i></Link></li>
                  <li><Link to="#">cart<i class="fa-solid fa-cart-shopping"></i></Link></li>
              </ul>

              </nav> 

          
      </div>

      <h1>{ data.site.siteMetadata.title }</h1>
    </header>
  )
}
export default Header