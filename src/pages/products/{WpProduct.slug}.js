
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
          priceproduit,
  } from '../../css/ProductPage.module.css'
  
import ProductTitlePage from "../../components/WpProduct.title";
import ProductMatierePage from "../../components/WpProduct.matiere";
import ProductImagePage from "../../components/WpProduct.title";
import SimpleProductPage from "../../components/WpProduct.matiere";
import ProductCouleurPage from "../../components/WpProduct.title";
import ProductTaillePage from "../../components/WpProduct.matiere";
import ProductDescriptionPage from "../../components/WpProduct.title";

export default function ProductPage(props) {

  const {//champs de premier niveau
    id, name, sku, image, allPaCouleur, allPaCoupe, allPaTaille, allPaMatiere, description, price
  } = props?.data?.wpProduct;
  const myImage = getImage(image.localFile)

  console.log (props?.data?.wpProduct)

  return (
    <Layout>
      <h2 className={titreproduit}>
      
              <ProductTitlePage/>
     
      </h2>
      {/*<pre>{JSON.stringify(props?.data?.wpProduct)}</pre>*/}

      <div className={myImage}>
              <ProductImagePage/>
      </div>

      <div className={priceproduit}>
              <SimpleProductPage/>
      </div>

      <div className={couleurproduit}>
            <ProductCouleurPage/>
        </div>

      {allPaCoupe.nodes.map(Coupe => (
        <p className={coupeproduit}>{Coupe.name}</p>
      ))} 

      <div className={tailleproduit}>
            <ProductTaillePage/>
        </div>

      <div className={matiereproduit}>
            <ProductMatierePage/>
        </div>

      <div className={descriptionproduit}>
            <ProductDescriptionPage/>
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