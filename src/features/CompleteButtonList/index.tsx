import React, { ReactElement } from 'react'
import './index.scss'
import { useNavigate } from 'react-router'
import PdfGenerator from '../../pdf/PdfGenerator'

const HomeButtonList = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  const downloadPdf = () => {
    const test = new PdfGenerator()
    // TODO: 보관함 검증 필요
    test.download()
  }

  return (
    <div className="complete-button-list-layout">
      <h1 className="main-title">🎉Congratulations!!!👍</h1>
      <div className="content-box">모든 띠부띠부씰을 모았습니다.</div>
      <button className="styled-button" onClick={goBack}>
        Go to first page
      </button>
      <button className="styled-button" onClick={downloadPdf}>
        Download Certification
      </button>
    </div>
  )
}

export default HomeButtonList
