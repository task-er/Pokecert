import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

// note: 해당 페이지는 컬렉션 완료되면 이동되는 페이지로, pdf를 다운받을 수 있다.
const Complete = (): ReactElement => {
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

export default Complete
