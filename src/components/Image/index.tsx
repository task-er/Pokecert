import React, { ReactElement } from 'react'
// note: useHistory 대신 useNavigate 사용
import './index.scss'

interface ImageProps {
  src: string
  alt?: string
}
const Image = ({ src, alt }: ImageProps): ReactElement => {
  return <img src={src} alt={alt} className="main-character" />
}

export default Image
