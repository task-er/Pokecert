import React, { ReactElement } from 'react'
import './index.scss'
import Image from '@components/Image'
import { useAppDispatch, useAppSelector } from '../../store/config'
import { selectPokemon } from '../../store/selectPokemonSlice'

interface CealProps {
  id: number
  no: number
  name: string
  image: string
  selected: boolean
}
const Ceal = ({ id, no, name, image, selected }: CealProps): ReactElement => {
  const dispatch = useAppDispatch()
  const { selected: selectedPokemon } = useAppSelector(
    (state) => state.selectPokemonSlice,
  )

  const openPokemonSelectionModal = (num: number) => {
    return () => {
      // TODO: open modal
      if (selected) {
        // TODO: selected 삭제
        const current = selectedPokemon.indexOf(num)
        dispatch(
          selectPokemon([
            ...selectedPokemon.slice(0, current),
            ...selectedPokemon.slice(current + 1, selectedPokemon.length),
          ]),
        )
      } else {
        dispatch(selectPokemon([...selectedPokemon, num]))
      }
    }
  }

  return (
    <div
      className={`ceal ${selected ? 'selected' : ''}`}
      onClick={openPokemonSelectionModal(id)}
    >
      <div>
        no. {no} <br /> {name}
      </div>
      <Image src={image}></Image>
    </div>
  )
}

export default Ceal
