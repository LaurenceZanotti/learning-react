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

// Styling resource:
// https://www.smashingmagazine.com/2020/05/styling-components-react/#:~:text=styled%2Dcomponents%20is%20a%20library,called%20CSS%2Din%2DJS.

function MyInfo() {
  return (
    <div className="info-container">
      <h1>Laurence Zanotti</h1>
      <p>I love being both logical and creative</p>
      <p>I'd like to visit: </p>
      <ul>
        <li>Paraná (South of Brazil)</li>
        <li>New York</li>
        <li>Bulgaria</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.querySelector('#root'))