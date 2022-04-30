import React, { ReactElement } from 'react'
import './index.scss'
import Image from '@components/Image'

interface CealProps {
  no: number
  name: string
  image: string
}
const Ceal = ({ no, name, image }: CealProps): ReactElement => {
  return (
    <div className="ceal">
      <div>
        no. {no} <br /> {name}
      </div>
      <Image src={image}></Image>
    </div>
  )
}

export default Ceal
