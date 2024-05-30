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
   const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {}

  return (
    <button onClick={handleClick}>Click Me</button>
  )
}

export default Button5