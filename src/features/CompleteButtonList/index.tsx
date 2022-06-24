import React, { ReactElement, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppSelector } from '@redux/config'
import PdfGenerator from '@pdf/PdfGenerator'
import './index.scss'

const HomeButtonList = (): ReactElement => {
  const navigate = useNavigate()
  const { isComplete } = useAppSelector((state) => state.checkIsCompleteSlice)

  const moveToHome = useCallback((): void => {
    navigate('/')
  }, [])

  // note: 안정성을 위해 서버에서 받는 것이 좋으나, 해당 프로젝트는 프론트 단에서 다운로드
  const downloadPdf = useCallback((): void => {
    const pdfGenerator = new PdfGenerator()
    pdfGenerator.download()
  }, [])

  const checkAuth = useCallback((): void => {
    if (!isComplete) {
      moveToHome()
    }
  }, [isComplete])

  useEffect(checkAuth, [])

  return (
    <div className="complete-button-list-layout">
      <h1 className="main-title" data-cy="complete_title_label">
        🎉Congratulations!!!👍
      </h1>
      <div className="content-box">모든 띠부띠부씰을 모았습니다.</div>
      <button
        className="styled-button"
        onClick={moveToHome}
        data-cy="complete_home_button"
      >
        Go to the first page
      </button>
      <button
        className="styled-button"
        onClick={downloadPdf}
        data-cy="complete_download_button"
      >
        Download Certification
      </button>
    </div>
  )
}

export default HomeButtonList
