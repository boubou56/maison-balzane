
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import { titrepage, 
        contenupage,
  } from '../css/page.module.css'

export default function Page(props) {

  const {//champs de premier niveau
    id
  } = props?.data?.wpPage;

  console.log (props?.data?.wpPage)

  return (
    <Layout>
      <h2 className={titrepage}>
      
              {/* <PageTitlePage title={lestitres} /> */}
     
      </h2>

      <div className={contenupage}>
              {/* <PageContentPage content={lescontenus}/> */}
      </div>

    </Layout>
    )
  }
// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.
export const query = graphql`
  query($id: String) {
    wpPage(id: { eq: $id }) {
    id 
    slug
    content
  }
  }
`