import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

// note: 해당 페이지는 컬렉션 완료되면 이동되는 페이지로, pdf를 다운받을 수 있다.
const Complete = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  const downloadPdf = () => {
    console.log('download')
  }

  return (
    <>
      <div>🎉Congratulations!!!👍</div>
      <button onClick={goBack}>preview</button>
      <div>
        모든 띠부띠부씰을 모았습니다.
        <button onClick={downloadPdf}>Download Certification</button>
      </div>
    </>
  )
}

export default Complete
