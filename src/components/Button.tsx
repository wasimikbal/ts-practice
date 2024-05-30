import React from 'react'

//Union type
type color = 'bg-blue-500' | 'bg-green-500' | 'bg-black-500'

//Button props object
type ButtonProps = {
  backgroundColor: color,
  textColor: color,
  fontSize: number,
  pillShape?: boolean
  padding: [number, number, number, number]
}

const Button = ({backgroundColor, textColor, fontSize, pillShape, padding}: ButtonProps) => {
    
  const DoSomething = (name: string, age: number): string => {
    return "string to be returned";
  }

  return (
    <button style={{
      backgroundColor : backgroundColor,
      color: textColor,
      fontSize: fontSize,
      padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
    }}>Click Me</button>
  )
}

export default Button