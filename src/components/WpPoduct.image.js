import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
    myimage,
} from '../../css/ProductPage.module.css'

export default function ProductImagePage() {

    const myImage = getImage(image.localFile)


    return (

        <Layout>
        <div className={myimage}>{props.image.localFile.childImageData}
            <GatsbyImage image={myImage} alt={image.alText} />
        </div>
        </Layout>
    )
}

export const query = graphql`
        query($id: String) {
             wpProduct(id: { eq: $id }) {
    
            image {
                localFile {
                childImageSharp {
                gatsbyImageData(width: 200)
                    }
                }
            altText
                }
             }
        }
        `