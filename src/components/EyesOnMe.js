import React from 'react'
import ReactDOM from 'react-dom'

function EyesOnMe() {
    return(
        <div>
            <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe