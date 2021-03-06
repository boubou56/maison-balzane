import React from "react"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"

import { CartProvider } from "./src/contexts/CartProvider/provider"

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)