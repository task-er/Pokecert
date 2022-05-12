import React, { ReactElement } from 'react'
import './index.scss'
import { useAppDispatch, useAppSelector } from '../../store/config'
import { selectPokemon } from '../../store/selectPokemonSlice'
import POKEMON_SPRITES from '@assets/images/pokemon-sprites.png'

interface CealProps {
  id: number
  no: number
  name: string
  selected: boolean
}
const Ceal = ({ id, no, name, selected }: CealProps): ReactElement => {
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
      className={`ceal ${selected ? 'selected ' : ''}pokemon-sprite-${no}`}
      onClick={openPokemonSelectionModal(id)}
      style={{
        backgroundImage: `url(${POKEMON_SPRITES})`,
        backgroundColor: '#03030330',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        no. {no} <br /> {name}
      </div>
    </div>
  )
}

export default Ceal
