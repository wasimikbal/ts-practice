import React from 'react'

const Button = () => {
    
  const DoSomething = (name: string, age: number): string => {
    return "string to be returned";
  }

  return (
    <button className='bg-blue-500 text-white rounded px-4 py-2'>Click Me</button>
  )
}

export default Button