import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

const Selection = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div>Empty Page.</div>
      <button onClick={goBack}>preview</button>
    </>
  )
}

export default Selection
