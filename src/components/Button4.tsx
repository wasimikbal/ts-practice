import React from 'react'

//Button props object
type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Button4 = ({setCount}: ButtonProps) => {
   
setCount(0);
  return (
    <button>{}</button>
  )
}

export default Button4