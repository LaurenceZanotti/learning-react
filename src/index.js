// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson)

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'

// Components exports a serem usados no App.js
// https://medium.com/swlh/import-components-in-react-like-a-pro-b1340cb76a1b
// https://stackoverflow.com/questions/46984955/how-to-import-all-components-in-react

export { default as Header } from './components/Header'
export { default as MainContent } from './components/MainContent'
export { default as Footer } from './components/Footer'

ReactDOM.render(<App />, document.querySelector('#root'))