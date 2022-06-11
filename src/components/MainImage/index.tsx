import React, { ReactElement } from 'react'
import './index.scss'

interface ImageProps {
  src: string
  width: number
  height: number
  alt?: string
}
const MainImage = ({ src, width, height, alt }: ImageProps): ReactElement => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="main-character"
    />
  )
}

export default MainImage
