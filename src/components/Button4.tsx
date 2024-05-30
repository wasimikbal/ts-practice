import React from 'react'

//Interface
interface IButtonProps{
    key: 'value',
    key2: 'value2'
}


//Button props object
type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Button4 = ({key, key2}: IButtonProps) => {
   
  return (
    <button>{}</button>
  )
}

export default Button4