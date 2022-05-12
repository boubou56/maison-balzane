import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"
import {globalWrapper } from "../css/layout.module.css"

import parse from "html-react-parser"

import Header from '../pages/header'
import Footer from '../pages/footer'


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
    <div className={globalWrapper} data-is-root-path={isHomePage}>

      <Header />
        
      <main>{children}</main>

      <Footer />
      
    </div>
  )
}

export default Layout
