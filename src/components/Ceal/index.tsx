import React, { ReactElement } from 'react'
import './index.scss'
import Image from '@components/Image'

interface CealProps {
  no: number
  name: string
  image: string
  selected: boolean
}
const Ceal = ({ no, name, image, selected }: CealProps): ReactElement => {
  const openPokemonSelectionModal = () => {
    return () => {
      // TODO: open modal
    }
  }

  return (
    <div
      className={`ceal ${selected ? 'selected' : ''}`}
      onClick={openPokemonSelectionModal}
    >
      <div>
        no. {no} <br /> {name}
      </div>
      <Image src={image}></Image>
    </div>
  )
}

export default Ceal
