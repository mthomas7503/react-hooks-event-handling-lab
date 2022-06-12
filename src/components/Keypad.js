import React from 'react'
import ReactDOM from 'react-dom'

function Keypad() {

  return  (
  <form>
    <input type='password' onChange={() => console.log('Entering password...')} />
  </form>)
}

export default Keypad