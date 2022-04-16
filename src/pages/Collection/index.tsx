import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

const Collection = (): ReactElement => {
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

export default Collection
