import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

interface ButtonProps {
  page: string
  value: string
}
const Button = ({ page, value }: ButtonProps): ReactElement => {
  const navigate = useNavigate()

  const moveToPage = () => {
    navigate(page)
  }

  return (
    <button className="styled-button" onClick={moveToPage}>
      {value}
    </button>
  )
}

export default Button
