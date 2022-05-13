import React from "react"
import Layout from "../components/layout"
import { } from '../css/contact.module.css'



	const ContactPage = () => {
  	return (

   	<Layout>

       

        <form method="post" action="#">
            ...
            <label>
                <input type="text" name="nom" placeholder="Nom"/>
            </label>
            <label>
                <input type="text" name="prenom" placeholder="Prenom"/>
            </label>
            <label>
                <input type="text" name="boutique" Placeholder="Nom de votre boutique"/>
            </label>
            <label>
                <input type="text" name="boutique" Placeholder="Entrer la ville de votre boutique"/>
            </label>
            <label>
                <input type="email" name="email" placeholder="Entrer votre Email"/>
                </label>
            <label>
                <input type="text" name="objet" Placeholder="Objet de votre message"/>
            </label>
            <label>
                <input type="text" name="message" Placeholder="Entrez votre message"/>
            </label>
                   
                <input type="text" name="_gotcha" style="display:none" />
            
                <button type="submit">Envoyer</button>
                <input type="reset" value="Clear" />
            ...          
        </form>


    </Layout>

 		)
}
		export default ContactPage