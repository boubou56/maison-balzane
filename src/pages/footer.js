import * as React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { pied, 
  bas,
  gauche,
  milieu,
  droite,
  colonne,} from '../css/footer.module.css'


// Step 1: Import the useStaticQuery hook and graphql tag

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
    <footer classNameName={pied}>

     <div className={bas}>
    
    
         <ul className={gauche}>
            <li><Link to="page-faq.php">FAQ</Link></li>
            <li><Link to="page-guidetailles.php">Guide des tailles</Link></li>
            <li><Link to="page-plansite.php">Plan du site</Link></li>
        </ul>
    
        <ul className={milieu}> 
            
            <li><Link to="#">Réseaux Sociaux</Link></li>
            <li><Link to="#">Live Shopping</Link></li>
            <li><Link to="page-revendeur.php">Devenir revendeur</Link></li>
        </ul>           
    
        <ul className={droite}>
            <li><Link to="page-politiquesconf.php">Politiques de confidentialités</Link></li>
            <li><Link to="page-cgv.php">Conditions Générales des Ventes</Link></li>
            <li><Link to="pLinkge-rgpd.php">Protection des Données</Link></li>
        </ul>
    
    </div>  

     <div className={colonne}>
    
    <p>&copy; B@o Design - 2022 - <Link to="#">Mentions légales</Link></p>
    </div>

    
    </footer>
);
}

export default Footer