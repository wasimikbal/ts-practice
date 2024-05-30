import React from 'react'

//Button props object
type ButtonProps = {
  children: React.ReactNode
}

const Button3 = ({children}: ButtonProps) => {
   

  return (
    <button>{children}</button>
  )
}

export default Button3