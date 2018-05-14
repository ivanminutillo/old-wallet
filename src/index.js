import React from "react"
import ReactDOM from "react-dom"
import "./web/index.css"
import App from "./App"
import registerServiceWorker from "./web/registerServiceWorker"
import { ApolloProvider } from 'react-apollo'
import Client from './store'

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>, document.getElementById("root"))
registerServiceWorker()

const injectFonts = () => {
  const style = document.createElement("style")

  // feather
  const feather = require("react-native-vector-icons/Fonts/Feather.ttf")
  const featherStyles = `@font-face {
src: url(${feather});
font-family: 'Feather';
}`
  style.type = "text/css"
  if (style.styleSheet) {
    style.styleSheet.cssText = featherStyles
  } else {
    style.appendChild(document.createTextNode(featherStyles))
  }


  // Entypo
  const entypoFont = require("react-native-vector-icons/Fonts/Entypo.ttf");
  const entypoFontStyles = `@font-face {
src: url(${entypoFont});
font-family: 'Entypo';
}`
  style.type = "text/css"
  if (style.styleSheet) {
    style.styleSheet.cssText = entypoFontStyles
  } else {
    style.appendChild(document.createTextNode(entypoFontStyles))
  }

  document.head.appendChild(style);
};

injectFonts();
