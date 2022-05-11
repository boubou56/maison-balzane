import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import { titreproduit, 
          couleurproduit,
          coupeproduit, 
          tailleproduit,
          matiereproduit,
          descriptionproduit,
  } from '../../css/ProductPage.module.css'
export default function ProductPage(props) {
  const {//champs de premier niveau
    id, name, sku, image, allPaCouleur, allPaCoupe, allPaTaille, allPaMatiere, description
  } = props?.data?.wpProduct;
  const myImage = getImage(image.localFile)

  console.log (props?.data?.wpProduct)
  return (
    <Layout>
      <h2 className={titreproduit}>{name}</h2>
      <pre>{JSON.stringify(props?.data?.wpProduct)}</pre>
      <GatsbyImage image={myImage} alt={image.alText} />

      {allPaCouleur.nodes.map(couleur => (
        <p className={couleurproduit}>{couleur.slug}</p>
      ))} 

      {allPaCoupe.nodes.map(Coupe => (
        <p className={coupeproduit}>{Coupe.name}</p>
      ))} 

      {allPaTaille.nodes.map(taille => (
        <p className={tailleproduit}>{taille.name}</p>
      ))} 

      {allPaMatiere.nodes.map(matiere => (
        <p className={matiereproduit}>{matiere.name}</p>
      ))} 

      <div className={descriptionproduit}>
        {parse(description)}
      </div>

    </Layout>
    )
  }
// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.
export const query = graphql`
  query($id: String) {
    wpProduct(id: { eq: $id }) {
     id
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