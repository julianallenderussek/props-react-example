import React from 'react'

// INSTED OF USING PROPS WE CAN GRAB DIRECTLY THE KEY WE WANT
const MyComponent = ( { property } ) => {
    
    // THIS IS WITH OBJECT DISTRUCTURING
    console.log(property)
    
     return (
    <div>MyComponent</div>
  )
}

export default MyComponent