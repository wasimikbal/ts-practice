import React from 'react'

type ButtonProps = {
  backgroundColor: string,
  fontSize: number,
  pillShape?: boolean
}

const Button = ({backgroundColor, fontSize, pillShape}: ButtonProps) => {
    
  const DoSomething = (name: string, age: number): string => {
    return "string to be returned";
  }

  return (
    <button className={`${backgroundColor} text-white rounded px-4 py-2`}>Click Me</button>
  )
}

export default Button