import React, { useContext } from 'react'
import Layout from '../components/layout';
import { CartContext } from "../contexts/CartProvider/context";


export default function CartPage(props) {
const {cart} = useContext(CartContext);

console.log("Cart", cart);

  return (
    <Layout>

    </Layout>
  )
}

export const query = graphql`
query AllMyProducts {
  allWpProduct {
    nodes {
      sku
      name
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 200, layout: CONSTRAINED)
          }
        }
      }
      ... on WpSimpleProduct {
       price
      }
    }
  }
}
`