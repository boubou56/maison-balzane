import React from "react";
import { render } from "react-dom";

const theme = {
  dark: {
    background: '#000',
    color: '#FFF',
    border: 'solid 1px #FFF'
  },
  light: {
    background: '#FFF',
    color: '#000',
    border: 'solid 1px #000'
  }
}

const ThemeContext = React.createContext(theme.dark)

function Toolbar() {
  return <div>
    <ThemedButton>Ajouter au panier</ThemedButton>
  </div>
}

function ThemedButton({ children }) {
  return <ThemeContext.Consumer>
    {value => {
      return <button style={value}>{children}</button>
    }}
  </ThemeContext.Consumer>
}

function Layout() {
  return <div>
    <ThemeContext.Provider>
      <Toolbar />
    </ThemeContext.Provider>
  </div>

}

render(
  <Layout />,
  document.getElementById('layout')
)