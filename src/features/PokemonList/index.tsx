import React, { ReactElement, useEffect, useState } from 'react'
import './index.scss'
import { pokemons } from '@commons/pokemon.json'
import Ceal from '@components/Ceal'
import { PokemonType, DEFAULT_POKEMON } from '@commons/types'
import { useAppDispatch, useAppSelector } from '@redux/config'
import { selectPokemon } from '@redux/selectPokemonSlice'
import Modal from '@components/Modal'
import { findPokemon } from '@redux/findPokemonSlice'

// TODO: 각 locationStorage나 redux-persist로 대체 필요
const PokemonList = (): ReactElement => {
  const dispatch = useAppDispatch()
  const { keyword } = useAppSelector((state) => state.findPokemonSlice)
  const { selected } = useAppSelector((state) => state.selectPokemonSlice)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [currentPokemon, setCurrentPokemon] =
    useState<PokemonType>(DEFAULT_POKEMON)
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const { selected: selectedPokemon } = useAppSelector(
    (state) => state.selectPokemonSlice,
  )

  const extracted = pokemons.filter((pokemon: PokemonType) => {
    const regex = new RegExp(keyword)
    return regex.test(pokemon.name)
  })

  const createModalContent = () => {
    if (isSelected) {
      return `내 보괌함에서 no.${currentPokemon.no} ${currentPokemon.name} 을(를) 삭제하시겠습니까?`
    }
    return `내 보관함에 no.${currentPokemon.no} ${currentPokemon.name} 을(를) 추가하시겠습니까?`
  }

  const createModalOkText = () => {
    if (isSelected) {
      return '삭제'
    }
    return '보관'
  }

  const openPokemonSelectionModal = (pokemon: PokemonType) => {
    return () => {
      setCurrentPokemon(pokemon)
      setIsOpenModal(true)
    }
  }

  const okHandler = () => {
    setIsOpenModal(false)
    if (isSelected) {
      const current = selectedPokemon.indexOf(currentPokemon.id)
      dispatch(
        selectPokemon([
          ...selectedPokemon.slice(0, current),
          ...selectedPokemon.slice(current + 1, selectedPokemon.length),
        ]),
      )
    } else {
      dispatch(selectPokemon([...selectedPokemon, currentPokemon.id]))
    }
  }

  const cancelHandler = () => {
    setIsOpenModal(false)
  }

  useEffect(() => {
    dispatch(findPokemon(''))
  }, [])
  useEffect(() => {
    setIsSelected(selected.includes(currentPokemon.id))
  }, [currentPokemon])

  return (
    <div className="pokemon-list-layout">
      {extracted.map(({ id, ...pokemon }: PokemonType) => {
        return (
          <Ceal
            key={`${id}${pokemon.name}`}
            isSelected={selected.includes(id)}
            onClickEvent={openPokemonSelectionModal({ id, ...pokemon })}
            {...pokemon}
          />
        )
      })}
      {isOpenModal && (
        <Modal
          content={createModalContent()}
          onOkText={createModalOkText()}
          onOkEvent={okHandler}
          onCancelEvent={cancelHandler}
          onClickOutsideEvent={cancelHandler}
        />
      )}
    </div>
  )
}

export default PokemonList
