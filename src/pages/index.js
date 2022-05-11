


import React from "react"
import { Link, graphql } from "gatsby"

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

            <div id="moncarousel" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>

            <div class="carousel-inner">

            <div class="carousel-caption d-none d-md-block">

                <span class="titre">
                    <h1>La mode responsable</h1>
                    <h2>Des vêtements <strong>éthiques</strong> avec des accessoires <strong>écoresponsables</strong> qui durent plus longtemps</h2>
                </span>

             </div>

            <div class="carousel-item active">
                    <img class="d-block w-100" src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/Couv-Balzane.jpg" alt="First slide"/>
            </div>

            <div class="carousel-item">
                     <img class="d-block w-100" src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/couv-2-Balzane.jpg" alt="Second slide"/>
            </div>
  
            </div>

            <a class="carousel-control-prev" href="#moncarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Precédent</span>
            </a>

            <a class="carousel-control-next" href="#moncarousel" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Suivant</span>
            </a>

            </div>    

             <div id="boutoncarousel" class="margincontenu"> 

                    <div class="boutoncarousel">
                        <button type="button" class="btn btn-outline-secondary">nouveautés</button>
                    </div>  

                    <div class="boutoncarousel">
                         <button type="button" class="btn btn-outline-secondary">Lire notre charte</button>
                    </div>

                    <div class="boutoncarousel">
                        <button type="button" class="btn btn-outline-secondary">collabs</button>
                    </div>  

            </div>
    	
            <div class="animation">
        <span > 
            <button type="button" class="btn btn-outline-secondary">Animation</button> 
        </span>
            </div>

            <nav id="menulastchance">

                <label class="menu-toggle2" for="menu-toggle2">Dernières tailles</label>
                <input type="checkbox" id="menu-toggle2"/>

                <ul class="lastchance ">
                    <li><a href="#">Sweatshirts</a></li>
                    <li><a href="#">Tshirts et Polos</a></li>
                    <li><a href="#">Accessoires eco responsables</a></li>
                    <li><a href="#">Chemises et tops</a></li>
                    <li><a href="#">Robes et Jupes</a></li>
                    <li><a href="#">Pantalons et shorts</a></li>
                </ul>

            </nav>

            <div class="boutonselection" >

            <button type="button" class="btn btn-outline-secondary">Notre selection</button>
            </div>


</main>

 		)
}
		export default IndexPage


     