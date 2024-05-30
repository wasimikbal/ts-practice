import React from 'react'

//Button props object
type ButtonProps = {
  onclick: () => void
}

const Button3 = ({onclick}: ButtonProps) => {
   

  return (
    <button onClick={onclick}>Click Me</button>
  )
}

export default Button3