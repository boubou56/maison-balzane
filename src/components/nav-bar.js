import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { menuprincipal, 
  menuToggle,
  logo,menu} from '../css/header.module.css'

export default function NavBar() {
  return (
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
    <li><Link to="/about">À propos</Link></li>
    <li><Link to="#">search<i class="fa-solid fa-magnifying-glass"></i></Link></li>
    <li><Link to="#">compte<i class="fa-solid fa-user"></i></Link></li>
    <li><Link to="#">cart<i class="fa-solid fa-cart-shopping"></i></Link></li>
</ul>

</nav>  
  )
}


