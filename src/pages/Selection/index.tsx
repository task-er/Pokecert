import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Selection = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="selection-wrapper">
      <div className="selection-layout">
        <span className="title">보관함</span>
        <div className="search">
          <input type="text" />
          <input type="button" value="search" />
        </div>

        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>
        <div className="box">A</div>

        <br />
        <button onClick={goBack}>preview</button>
      </div>
    </div>
  )
}

export default Selection
