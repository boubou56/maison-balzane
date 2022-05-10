


import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'
import { bandeau, 
         livraison,
         blocHeader,
         menuprincipal,
         menuToggle,
         logo,
         menu,} from '../css/index.modules.css'
         
		const IndexPage = () => {
  		return (

   		<main>

            <header className={bandeau} >

            <section className={livraison}>
                     <p> Livraison Gratuite en France métropolitaine à partir de 150€ d'achat </p>
            </section>    

            <div className={blocHeader}>
                    <nav className={menuprincipal}>

                    <label className={menuToggle} for="menu-toggle"></label>
                    <input type="checkbox" className={menuToggle}/>
                    <StaticImage className={logo} alt="XXXXXXX" src="../images/Logo-allonge.jpg"> </StaticImage>

                    <ul className={menu}>

                        <li><Link to="/index">Accueil</Link></li>
                        <li><Link to="/homme">Homme</Link></li>
                        <li><Link to="/femme">Femme</Link></li>
                        <li><Link to="/accessoires">Accessoires</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="apropos">À propos</Link></li>
                        <li><Link to="#"><i class="fa-solid fa-magnifying-glass"></i></Link></li>
                        <li><Link to="#"><i class="fa-solid fa-user"></i></Link></li>
                        <li><Link to="#"><i class="fa-solid fa-cart-shopping"></i></Link></li>
                    </ul>

                    </nav> 
  
              
                <title>Home Page</title>
     				 <h1>Maison Balzane, La mode responsable!</h1>

    				  <p> lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum . </p>
            </div>

            </header> 


    	</main>

 		)
}
		export default IndexPage

