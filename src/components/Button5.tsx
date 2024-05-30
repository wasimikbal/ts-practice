import React from 'react'




//Button props object
type ButtonProps = {
    bgcolor: string,
    textColor: string,
};

type ButtonWithPaddingProps = ButtonProps & {
    padding: number
}

const Button5 = ({}: ButtonProps) => {
   
  return (
    <button>Click Me</button>
  )
}

export default Button5