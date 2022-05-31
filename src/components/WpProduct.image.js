import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import {
    myimage as myImageClass,
} from '../components/WpProduct.image.module.css'

export default function ProductImage({image}) {

    console.log("ProductImage", image)

    return ( 
        <div className={myImageClass}>
            <GatsbyImage image={image} alt={image.alText} />
        </div>
        
    );
}