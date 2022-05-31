import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
    myimage,
} from '../css/ProductPage.module.css'

export default function ProductImage({image}) {

    console.log("ProductImage", image, myimage)

    const myImage = getImage(image.localFile)

    return ( 
        <div className={myimage}>
            <GatsbyImage image={myImage} alt={image.alText} />
        </div>
        
    );
}