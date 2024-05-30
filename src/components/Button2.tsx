import React from 'react'

//Union type
type color = 'bg-blue-500' | 'bg-green-500' | 'bg-black-500'

//Button props object
type ButtonProps = {
  style: React.CSSProperties
}

const Button2 = ({style}: ButtonProps) => {
    
  const DoSomething = (name: string, age: number): string => {
    return "string to be returned";
  }

  return (
    <button style={style}>Click Me</button>
  )
}

export default Button2