import React, { useState } from 'react'

type User = {
    name: string,
    age: string
}


const Hooks = () => {
    const [user, setUser] = useState<User | null>(null) // Initially it will be null until fetched and set


  return (
    <>
    </>
  )
}

export default Hooks