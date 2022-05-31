
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
  contenu,
  coupeproduct,
  containerproduct,
  myimage as imageclass,

} from '../../css/ProductPage.module.css'

import ProductTitlePage from "../../components/WpProduct.title";
import ProductMatierePage from "../../components/WpProduct.matiere";
import ProductImagePage from "../../components/WpProduct.image";
import ProductCouleurPage from "../../components/WpProduct.couleur";
import ProductTaillePage from "../../components/WpProduct.taille";
import ProductDescriptionPage from "../../components/WpProduct.description";


export default function ProductPage(props) {

  const {//champs de premier niveau
    id, name, sku, image, allPaCouleur, allPaCoupe, allPaTaille, allPaMatiere, description, price
  } = props?.data?.wpProduct;

  const listeCouleurs = allPaCouleur.nodes.map(function (elementTableau) {
    return elementTableau.slug
  })

  const listeTailles = allPaTaille.nodes.map(function (elementTaille) {
    return {
      slug: elementTaille.slug,
      name: elementTaille.name,
    }
  })

  const listeMatieres = allPaMatiere.nodes.map(function (elementMatiere) {
    return elementMatiere.name
  })

  const myImage = getImage(image.localFile)

  console.log(props?.data?.wpProduct)

  return (

    <Layout>

      <div className={containerproduct}>

        <div className={imageclass}>
          <ProductImagePage image={myImage} />
        </div>

        <div className={contenu}>

          <ProductTitlePage title={name} sku={sku} price={price} />

          <ProductCouleurPage couleurs={listeCouleurs} />

          <ProductTaillePage tailles={listeTailles} />

          {allPaCoupe.nodes.map(Coupe => (
            <p className={coupeproduct}>{Coupe.name}</p>
          ))}

          <ProductMatierePage matieres={listeMatieres} />

          <ProductDescriptionPage description={description} />

        </div>

      </div>

    </Layout >

  )
}
// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.
export const query = graphql`
  query($id: String) {
    wpProduct(id: { eq: $id }) {
     
     name
     sku
    slug

    image {
      localFile {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
      }
      altText
    }
    ... on WpSimpleProduct {
      price
    }
    allPaCouleur {
      nodes {
        id
        name
        slug
      }
    }
    allPaCoupe {
      nodes {
        name
      }
    }
    allPaTaille {
      nodes {
        name
        slug
      }
    }
    allPaMatiere {
      nodes {
        name
      }
    }
    description
  }  
  }
`