import * as React from 'react'


// Step 1: Import the useStaticQuery hook and graphql tag
import { useStaticQuery, graphql } from 'gatsby'
const Footer = () => {

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
    <footer class="pied">

     <div class="bas">
    
    
         <ul class="gauche">
            <li><a href="page-faq.php">FAQ</a></li>
            <li><a href="page-guidetailles.php">Guide des tailles</a></li>
            <li><a href="page-plansite.php">Plan du site</a></li>
        </ul>
    
        <ul class="milieu"> 
            <a href="reseauxsociaux">Réseaux Sociaux</a>
            <li><a href="#">Réseaux Sociaux</a></li>
            <li><a href="#">Live Shopping</a></li>
            <li><a href="page-revendeur.php">Devenir revendeur</a></li>
        </ul>           
    
        <ul class="droite">
            <li><a href="page-politiquesconf.php">Politiques de confidentialités</a></li>
            <li><a href="page-cgv.php">Conditions Générales des Ventes</a></li>
            <li><a href="page-rgpd.php">Protection des Données</a></li>
        </ul>
    
    </div>  
    
    
    <div class='monfooter'>
    
     
    </div>
    
    <div class="colonne">
    <a href="#bandeau"><img src="images-garden/flechehaut.png"/></a>
    <p>&copy; B@o Design - 2022 - <a href="#">Mentions légales</a></p>
    </div>

    
    </footer>
);
}

export default Footer