import React, { useState } from 'react'

const Hello = () => {

  const getTheValue = () => {}

  const [ value, setValue ] = useState(0);

  return (
    <div>
      <h2>Hi </h2>
      <h1>Zarif</h1>
      <h3 onClick={() => setValue(value + 1)}>{value}</h3>
    </div>
  )
}

export default Hello
