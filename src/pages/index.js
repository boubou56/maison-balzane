


import React from "react"
import { Link, graphql } from "gatsby"
import Header from './header'
import Footer from './footer'
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

        <Header />

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

            <div class="top-content">

            <div class="container-fluid">
                <div id="carousel-lastchance" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner row w-100 mx-auto" role="listbox">
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Tshirt-Marine.jpg" class="img-fluid mx-auto d-block" alt="img1"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Tshirt-Blanc.jpg" class="img-fluid mx-auto d-block" alt="img2"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Tshirt-gris.jpg" class="img-fluid mx-auto d-block" alt="img3"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Tshirt-Noir-.jpg" class="img-fluid mx-auto d-block" alt="img4"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Sweat-Blanc.jpg" class="img-fluid mx-auto d-block" alt="img5"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Sweat-Gris.jpg" class="img-fluid mx-auto d-block" alt="img6"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Sweat-Zip-Gris-R.jpgg" class="img-fluid mx-auto d-block" alt="img7"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Sweat-Zip-Noir-R.jpg" class="img-fluid mx-auto d-block" alt="img8"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/04/Bas-Blanc-.jpg" class="img-fluid mx-auto d-block" alt="img8"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/04/Bas-Gris.jpgg" class="img-fluid mx-auto d-block" alt="img8"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/04/Bas-Marine.jpg" class="img-fluid mx-auto d-block" alt="img8"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Tshirt-Marine.jpg" class="img-fluid mx-auto d-block" alt="img1"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Tshirt-Blanc.jpg" class="img-fluid mx-auto d-block" alt="img2"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Tshirt-gris.jpg" class="img-fluid mx-auto d-block" alt="img3"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Tshirt-Noir-.jpg" class="img-fluid mx-auto d-block" alt="img4"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Sweat-Blanc.jpg" class="img-fluid mx-auto d-block" alt="img5"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Sweat-Gris.jpg" class="img-fluid mx-auto d-block" alt="img6"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Sweat-Zip-Gris-R.jpgg" class="img-fluid mx-auto d-block" alt="img7"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Sweat-Zip-Noir-R.jpg" class="img-fluid mx-auto d-block" alt="img8"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/04/Bas-Blanc-.jpg" class="img-fluid mx-auto d-block" alt="img8"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/04/Bas-Gris.jpg" class="img-fluid mx-auto d-block" alt="img8"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://localhost/wptest-boucar/wp-content/uploads/2022/04/Bas-Marine.jpg" class="img-fluid mx-auto d-block" alt="img8"/>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        

        <div id="texteseo" class="row">

            <article class="seo col-6">
                <h2>Des <strong>accessoires éthiques</strong> dans vos dressings</h2>
                <p class='article1'>multiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time. The plugin also supports responsive</p>
            </article>

            <article class="seo col-6">
                <h2>Des <strong>vêtements écoresponsables</strong> dans vos dressings</h2>
                <p class='article2'>multiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time. The plugin also supports responsive</p>
            </article>

        </div>

        <div id="catalogue" class="row">
            
            <article class="decouverte col-6">
                <a href="#"><img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Pull-Vert.jpg" alt="pull vert" class="img-fluid"/></a>   
                <h3>BLA BLA SEO </h3>
                <button type="button" class="btn btn-outline-secondary">Découvrez</button>
            </article>

            <article class="decouverte col-6">
                <a href="#"><img src="http://localhost/wptest-boucar/wp-content/uploads/2022/03/Pull-Rose-R1.jpg" alt="pull vert" class="img-fluid"/></a>   
                <h3>BLA BLA SEO </h3>
                <button type="button" class="btn btn-outline-secondary">Découvrez</button>
            </article>    
         

        </div>

        <div class="valeurs">
            
            <button type="button" class="btnvaleurs btn btn-outline-secondary">Nos valeurs</button>
           

            <div id="valeurs">

                <article class="nosvaleurs">
                    <h3> Valeur 1 </h3>
                    <p>multiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time.</p>
                </article>

                <article class="nosvaleurs">
                    <h3> Valeur 2 </h3>
                    <p>multiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time.</p>
                </article>

                <article class="nosvaleurs">
                    <h3> Valeur 3 </h3>
                    <p>multiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time.</p>
                </article>

                <article class="nosvaleurs">
                    <h3> Valeur 4 </h3>
                    <p>multiple items per slide and advances one slide at a time. The plugin also supports responsivemultiple items per slide and advances one slide at a time.</p>
                </article>

            </div>

        </div>

        <div class="reassurance">

            <button type="button" class="btn btn-outline-secondary">Livraison et retour</button>
            <button type="button" class="btn btn-outline-secondary">Paiement sécurisé</button>
            <button type="button" class="btn btn-outline-secondary">Suivi de Commande</button>
            <button type="button" class="btn btn-outline-secondary">Service client</button>
        
        </div>   


    <Footer />

</main>

 		)
}
		export default IndexPage


     