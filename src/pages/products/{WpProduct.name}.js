import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
export default function Component(props) {
  return (
    <Layout>
      {JSON.stringify(props.data.wpProduct)}
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
    onSale
    sku
    image {
      height
      sourceUrl
    }
    }
  }
`