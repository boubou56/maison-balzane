import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'
import {  hommeseo,
         images,
         } from '../css/category.modules.css'
         
		const CategoryPage = () => {
  		return (

   		<main> 

        <div id="Tshirts" className='row'>

<section className={`${images} col-6`}>
    <a href="#"><img src="images/Textile/Tshirt-Marine.jpg" alt="Tshirt bleu marine"/></a>
    <a href="#"><img src="images/Textile/Tshirt-gris.jpg" alt="Tshirt gris"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Blanc recto.jpg" alt="Tshirt blanc"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Noir.jpg" alt="Tshirt noir"/></a>
    <button type="button" className={`btn btn-outline-secondary`}>Voir Plus ...</button>
</section>

<article className={`${hommeseo} col-6`}>
        <h2>Titre Tshirts</h2>
        <p> lorem seo ipsum lorem seo ipsum lorem seo ipsum lorem seo ipsum</p>
</article>

</div>

<div id="pantalons" className='row'>

<article className={`${hommeseo} col-6`}>
        <h2>Titre Pantalons</h2>
        <p> lorem seo ipsum lorem seo ipsum lorem seo ipsum lorem seo ipsum</p>
</article>

<section className={`${images} col-6`}>
    <a href="#"><img src="images/Textile/Tshirt-Marine.jpg" alt="Tshirt bleu marine"/></a>
    <a href="#"><img src="images/Textile/Tshirt-gris.jpg" alt="Tshirt gris"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Blanc recto.jpg" alt="Tshirt blanc"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Noir.jpg" alt="Tshirt noir"/></a>
    <button type="button" className={`btn btn-outline-secondary`}>Voir Plus ...</button>
</section>

</div>

<div id="sweats" className='row'>

<section className={`${images} col-6`}>
    <a href="#"><img src="images/Textile/Tshirt-Marine.jpg" alt="Tshirt bleu marine"/></a>
    <a href="#"><img src="images/Textile/Tshirt-gris.jpg" alt="Tshirt gris"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Blanc recto.jpg" alt="Tshirt blanc"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Noir.jpg" alt="Tshirt noir"/></a>
    <button type="button" className={`btn btn-outline-secondary`}>Voir Plus ...</button>
</section>

<article className={`${hommeseo} col-6`}>
        <h2>Titre Sweat shirt et Hoodies</h2>
        <p> lorem seo ipsum lorem seo ipsum lorem seo ipsum lorem seo ipsum</p>
</article>

</div>

<div id="chemises" className='row'>

<article className={`${hommeseo} col-6`}>
        <h2>Titre Chemises</h2>
        <p> lorem seo ipsum lorem seo ipsum lorem seo ipsum lorem seo ipsum</p>
</article>

<section className={`${images} col-6`}>
    
    <a href="#"><img src="images/Textile/Tshirt-Marine.jpg" alt="Tshirt bleu marine"/></a>
    <a href="#"><img src="images/Textile/Tshirt-gris.jpg" alt="Tshirt gris"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Blanc recto.jpg" alt="Tshirt blanc"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Noir.jpg" alt="Tshirt noir"/></a>
    <button type="button" className={`btn btn-outline-secondary`}>Voir Plus ...</button>
</section>

</div>

<div id="chaussures" className='row'>

<section className={`${images} col-6`}>
    <a href="#"><img src="images/Textile/Tshirt-Marine.jpg" alt="Tshirt bleu marine"/></a>
    <a href="#"><img src="images/Textile/Tshirt-gris.jpg" alt="Tshirt gris"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Blanc recto.jpg" alt="Tshirt blanc"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Noir.jpg" alt="Tshirt noir"/></a>
    <button type="button" className={`btn btn-outline-secondary`}>Voir Plus ...</button>
</section>

<article className={`${hommeseo} col-6`}>
        <h2>Titre Chaussures</h2>
        <p> lorem seo ipsum lorem seo ipsum lorem seo ipsum lorem seo ipsum</p>
</article>

</div>

<div id="vestes" className='row'>

<article className={`${hommeseo} col-6`}>
        <h2>Titre Vestes</h2>
        <p> lorem seo ipsum lorem seo ipsum lorem seo ipsum lorem seo ipsum</p>
</article>

<section className={`${images} col-6`}>
    <a href="#"><img src="images/Textile/Tshirt-Marine.jpg" alt="Tshirt bleu marine"/></a>
    <a href="#"><img src="images/Textile/Tshirt-gris.jpg" alt="Tshirt gris"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Blanc recto.jpg" alt="Tshirt blanc"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Noir.jpg" alt="Tshirt noir"/></a>
    <button type="button" className={`btn btn-outline-secondary`}>Voir Plus ...</button>
</section>

</div>

<div id="polos" className='row'>

<section className={`${images} col-6`}>
    <a href="#"><img src="images/Textile/Tshirt-Marine.jpg" alt="Tshirt bleu marine"/></a>
    <a href="#"><img src="images/Textile/Tshirt-gris.jpg" alt="Tshirt gris"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Blanc recto.jpg" alt="Tshirt blanc"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Noir.jpg" alt="Tshirt noir"/></a>
    <button type="button" className={`btn btn-outline-secondary`}>Voir Plus ...</button>
</section>

<article className={`${hommeseo} col-6`}>
        <h2>Titre Polos</h2>
        <p> lorem seo ipsum lorem seo ipsum lorem seo ipsum lorem seo ipsum</p>
</article>

</div>

<div id="unisex" className='row'>

<article className={`${hommeseo} col-6`}>
        <h2>Titre Unisex</h2>
        <p> lorem seo ipsum lorem seo ipsum lorem seo ipsum lorem seo ipsum</p>
</article>

<section className={`${images} col-6`}>
    <a href="#"><img src="images/Textile/Tshirt-Marine.jpg" alt="Tshirt bleu marine"/></a>
    <a href="#"><img src="images/Textile/Tshirt-gris.jpg" alt="Tshirt gris"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Blanc recto.jpg" alt="Tshirt blanc"/></a>
    <a href="#"><img src="images/Textile/Tshirt-Noir.jpg" alt="Tshirt noir"/></a>
    <button type="button" className={`btn btn-outline-secondary`}>Voir Plus ...</button>
</section>

</div>


    	</main>

 		)
        }
		export default CategoryPage


      
       