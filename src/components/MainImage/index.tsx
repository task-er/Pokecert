import React, { ReactElement } from 'react'
import './index.scss'

interface ImageProps {
  src: string
  alt?: string
}
const MainImage = ({ src, alt }: ImageProps): ReactElement => {
  return <img src={src} alt={alt} className="main-character" />
}

export default MainImage
