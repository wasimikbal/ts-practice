import React, { useRef, useState } from 'react'

type User = {
    name: string,
    sessionId: string
}

type Guest = Omit<User, 'name'> // leave the user with just sessionId


const Hooks = () => {

    const states = ['Awake', 'Sleep', 'Working'] as const // make the array readonly 

    const [user, setUser] = useState<User | null>(null) // Initially it will be null until fetched and set

    const ref = useRef<HTMLButtonElement | null>(null);


  return (
    <>
    <button ref={ref}></button>
    </>
  )
}

export default Hooks