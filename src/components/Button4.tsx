import React from 'react'

//Interface
interface IButtonProps{
    key: 'value',
    key2: 'value2'
}


//Button props object
type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    variant: 'alpha' | 'beta'
};

const Button4 = ({type, autoFocus, variant, ...rest}: ButtonProps) => {
   
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>Click Me</button>
  )
}

export default Button4