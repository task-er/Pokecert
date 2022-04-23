import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Collection = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="collection-wrapper">
      <div className="collection-layout">
        <span className="title">내가 가진 띠부띠부씰</span>
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

export default Collection
