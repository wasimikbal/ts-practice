import React from 'react'

//Interface
interface IButtonProps{
    key: 'value',
    key2: 'value2'
}


//Button props object
type ButtonProps = React.ComponentProps<'button'>;

const Button4 = ({type, autoFocus}: ButtonProps) => {
   
  return (
    <button>{}</button>
  )
}

export default Button4