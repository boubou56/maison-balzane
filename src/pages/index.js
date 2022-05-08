


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

            <body>
           
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
                                <img class="d-block w-100" src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/Couv-Balzane.jpg" alt="First slide">
                            </div>

                            <div class="carousel-item">
                                <img class="d-block w-100" src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/couv-2-Balzane.jpg" alt="Second slide">
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
 <!-- Fin de carousel -->
        
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
            
       <!-- <div id="contenu" class="container">
 Début Animation         -->
        
        <div class="animation">
        <span > 
            <button type="button" class="btn btn-outline-secondary">Animation</button> 
        </span>
        </div>
    
    <!-- Nav Last Chance -->

            <nav id="menulastchance">

                <label class="menu-toggle2" for="menu-toggle2">Dernières tailles</label>
                <input type="checkbox" id="menu-toggle2"/>

                <ul class="lastchance ">
                    <li><a href="#">Sweatshirts</a></li>
                    <li><a href="#">Tshirts & Polos</a></li>
                    <li><a href="#">Accessoires eco responsables</a></li>
                    <li><a href="#">Chemises & tops</a></li>
                    <li><a href="#">Robes & Jupes</a></li>
                    <li><a href="#">Pantalons & shorts</a></li>
                </ul>

            </nav>

    <!-- Début notre sélection -->

        <div class="boutonselection" >

            <button type="button" class="btn btn-outline-secondary">Notre selection</button>
        </div>

    <!-- Carousel notre collection -->

    <!-- Top content -->
        <div class="top-content">

            <div class="container-fluid">
                <div id="carousel-lastchance" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner row w-100 mx-auto" role="listbox">
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Tshirt-Marine.jpg" class="img-fluid mx-auto d-block" alt="img1">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Tshirt-Blanc.jpg" class="img-fluid mx-auto d-block" alt="img2">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Tshirt-gris.jpg" class="img-fluid mx-auto d-block" alt="img3">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Tshirt-Noir-.jpg" class="img-fluid mx-auto d-block" alt="img4">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Sweat-Blanc.jpg" class="img-fluid mx-auto d-block" alt="img5">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Sweat-Gris.jpg" class="img-fluid mx-auto d-block" alt="img6">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Sweat-Zip-Gris-R.jpgg" class="img-fluid mx-auto d-block" alt="img7">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Sweat-Zip-Noir-R.jpg" class="img-fluid mx-auto d-block" alt="img8">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/Bas-Blanc-.jpg" class="img-fluid mx-auto d-block" alt="img8">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/Bas-Gris.jpgg" class="img-fluid mx-auto d-block" alt="img8">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/Bas-Marine.jpg" class="img-fluid mx-auto d-block" alt="img8">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Tshirt-Marine.jpg" class="img-fluid mx-auto d-block" alt="img1">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Tshirt-Blanc.jpg" class="img-fluid mx-auto d-block" alt="img2">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Tshirt-gris.jpg" class="img-fluid mx-auto d-block" alt="img3">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Tshirt-Noir-.jpg" class="img-fluid mx-auto d-block" alt="img4">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Sweat-Blanc.jpg" class="img-fluid mx-auto d-block" alt="img5">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Sweat-Gris.jpg" class="img-fluid mx-auto d-block" alt="img6">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/uploads/2022/03/Sweat-Zip-Gris-R.jpgg" class="img-fluid mx-auto d-block" alt="img7">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/uploads/2022/03/Sweat-Zip-Noir-R.jpg" class="img-fluid mx-auto d-block" alt="img8">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/Bas-Blanc-.jpg" class="img-fluid mx-auto d-block" alt="img8">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/Bas-Gris.jpg" class="img-fluid mx-auto d-block" alt="img8">
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/04/Bas-Marine.jpg" class="img-fluid mx-auto d-block" alt="img8">
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
        
<!-- Fin de carousel -->

<!-- Articles pour SEO -->

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
                <a href="#"><img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Pull-Vert.jpg" alt="pull vert" class="img-fluid"></a>   
                <h3>BLA BLA SEO </h3>
                <button type="button" class="btn btn-outline-secondary">Découvrez</button>
            </article>

            <article class="decouverte col-6">
                <a href="#"><img src="http://maisonbalzane.4lw.fr/wp-content/uploads/2022/03/Pull-Rose-R1.jpg" alt="pull vert" class="img-fluid"></a>   
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

            <button type="button" class="btn btn-outline-secondary">Livraison & retour</button>
            <button type="button" class="btn btn-outline-secondary">Paiement sécurisé</button>
            <button type="button" class="btn btn-outline-secondary">Suivi de Commande</button>
            <button type="button" class="btn btn-outline-secondary">Service client</button>
        
        </div>    

    <div id="newscontact">

            <section class="newsletter"> 

            
                <h4>Rejoignez le mouvement mode eco responsable</h4>
                    <p>Inscrivez vous et profitez de 10€ sur votre première commande</p>

                    <form>  
                        
                        <div class="civilite">
                                    <!-- Group of default radios - option 1 -->
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios">
                                    <label class="custom-control-label" for="defaultGroupExample1">Femme</label>
                                </div>
                                
                                <!-- Group of default radios - option 2 -->
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" checked>
                                    <label class="custom-control-label" for="defaultGroupExample2">Homme</label>
                                </div>
                                
                                <!-- Group of default radios - option 3 -->
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios">
                                    <label class="custom-control-label" for="defaultGroupExample3">Autre</label>
                                </div>  

                        </div>

                        <div class="form-group">  
                            <label for="email"></label>  
                            <input type="email" class="form-control" id="email" placeholder="Entrez votre email">  
                        </div>  

                        <div class="form-check">  
                            <label class="form-check-label">  
                            <input class="form-check-input" type="checkbox" required > En m'inscrivant, j'accepte les CGU <br> maison balzane, la mode responsable.
                            </label>  

                            <button type="submit" class="btn btn-outline-secondary">M'inscrire</button>
                        </div>    
                    </form>  

            </section>  

            <article class="contact">

                <!-- voir pour liste -->
                    <h4> Contactez nous</h4>
                    <p>Des questions sur la <strong> mode éthique</strong>, <strong>accessoires eco responsables</strong> 
                        
                        <ul>
                            <li><a href="contact.php">E-mail</a></li>
                            <li><a href="0677940440">Whatsapp</a></li>
                            <li><a href="@maisonblazane">Instagram </a></li>
                        </ul>
            </article>

        </div>

                </body>   


    	</main>

 		)
}
		export default IndexPage

