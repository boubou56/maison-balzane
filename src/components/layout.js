import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"
import {globalWrapper, main } from "../css/layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import parse from "html-react-parser"

import Header from './header'
import Footer from './footer'
import { CartProvider } from "../contexts/CartProvider/provider";


const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
    
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <CartProvider>
      <div className={globalWrapper} data-is-root-path={isHomePage}>

        <Header />
          
        <main className={main}>{children}</main> 

        <Footer />
        
      </div>
    </CartProvider>
  )
}

export default Layout
