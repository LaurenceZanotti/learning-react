import React from 'react'
import '../index.css' 

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

export default MyInfo