import React, { ReactElement } from 'react'
import '@dir/App.css'
import { useNavigate } from 'react-router-dom'

const SelectionPage = (): ReactElement => {
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

export default SelectionPage
