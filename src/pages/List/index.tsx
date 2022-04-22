import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const List = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="list-wrapper">
      <div className="list-layout">
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

export default List
