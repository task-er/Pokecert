import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import './index.scss'
import { pokemons } from '@commons/pokemon.json'
import Ceal from '@components/Ceal'
import { PokemonType, DEFAULT_POKEMON } from '@commons/types'
import { useAppDispatch, useAppSelector } from '@redux/config'
import { selectPokemon } from '@redux/selectPokemonSlice'
import Modal from '@components/Modal'
import { findPokemon } from '@redux/findPokemonSlice'
import { insertMedals } from '@redux/hasMedalSlice'
import { setIsComplete } from '@redux/checkIsComplete'

import { useNavigate } from 'react-router'

const legendPokemons = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159]
const ancientPokemons = [143, 144, 145, 146, 147]
const strangePokemons = [1, 2, 3, 4]

interface PokemonListProps {
  isLock?: boolean
}
const PokemonList = ({ isLock }: PokemonListProps): ReactElement => {
  const dispatch = useAppDispatch()
  const { keyword } = useAppSelector((state) => state.findPokemonSlice)
  const { isComplete } = useAppSelector((state) => state.checkIsCompleteSlice)
  const { selectedPokemons } = useAppSelector(
    (state) => state.selectPokemonSlice,
  )
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [currentPokemon, setCurrentPokemon] =
    useState<PokemonType>(DEFAULT_POKEMON)
  const [ownedPokemons, setOwnedPokemons] = useState<Array<PokemonType>>([])
  const navigate = useNavigate()

  const initOwnedPokemons = (): void => {
    const temp = isLock
      ? pokemons
          .filter((pokemon: PokemonType) => {
            const regex = new RegExp(keyword)
            return selectedPokemons.has(pokemon.id) && regex.test(pokemon.name)
          })
          .filter((pokemon: PokemonType) => {
            const regex = new RegExp(keyword)
            return regex.test(pokemon.name)
          })
      : pokemons.filter((pokemon: PokemonType) => {
          const regex = new RegExp(keyword)
          return regex.test(pokemon.name)
        })
    setOwnedPokemons(temp)
  }

  const isSelectedAlready = useMemo((): boolean => {
    return selectedPokemons.has(currentPokemon.id)
  }, [currentPokemon])

  const checkIsEmptyOwnedPokemons = (): boolean => {
    return ownedPokemons.length < 1
  }

  const drawDefaultMessage = (): string | undefined => {
    const isEmptyOwnedPokemons = checkIsEmptyOwnedPokemons()

    if (isEmptyOwnedPokemons) {
      return isLock
        ? '보유중인 포켓몬이 없습니다.'
        : '검색 결과가 일치하지 않습니다.'
    }
    return undefined
  }

  const createModalContent = (): string => {
    if (isSelectedAlready) {
      return `내 보관함에서 no.${currentPokemon.no} ${currentPokemon.name} 을(를) 삭제하시겠습니까?`
    }
    return `내 보관함에 no.${currentPokemon.no} ${currentPokemon.name} 을(를) 추가하시겠습니까?`
  }

  const createModalOkText = (): string => {
    if (isSelectedAlready) {
      return '삭제'
    }
    return '보관'
  }

  const openPokemonSelectionModal = (pokemon: PokemonType): (() => void) => {
    return (): void => {
      setCurrentPokemon(pokemon)
      setIsOpenModal(true)
    }
  }

  const hasPokemons = ($pokemons: Array<number>): boolean => {
    const filteredPokemonList = $pokemons.filter((pokemonId: number) => {
      return selectedPokemons.has(pokemonId)
    })
    return JSON.stringify(filteredPokemonList) === JSON.stringify($pokemons)
  }

  const moveToComplete = (): void => {
    navigate('/complete')
  }

  const moveToCompleteWhenCollectedAll = (): void => {
    if (!isComplete) {
      dispatch(setIsComplete(true))
      moveToComplete()
    }
  }

  const cancelComplete = (): void => {
    if (isComplete) {
      dispatch(setIsComplete(false))
    }
  }

  const correctOwnedMedals = (): void => {
    const myMedals = new Set<number>()
    const numberOfPokemons = selectedPokemons.size

    // 다 모은 경우
    if (numberOfPokemons >= 159) {
      myMedals.add(10)
      moveToCompleteWhenCollectedAll()
    } else {
      // 다 모으지 않은 경우
      cancelComplete()
    }

    // 전설의 포켓몬을 모은 경우
    if (hasPokemons(legendPokemons)) {
      myMedals.add(9)
    }

    // 고대 포켓몬을 모은 경우
    if (hasPokemons(ancientPokemons)) {
      myMedals.add(8)
    }

    // 이상해씨 진화 포켓몬을 모은 경우
    if (hasPokemons(strangePokemons)) {
      myMedals.add(2)
    }

    // 120개 이상 모은 경우
    if (numberOfPokemons >= 120) {
      myMedals.add(7)
    }

    // 90개 이상 모은 경우
    if (numberOfPokemons >= 90) {
      myMedals.add(6)
    }

    // 60개 이상 모은 경우
    if (numberOfPokemons >= 60) {
      myMedals.add(5)
    }

    // 30개 이상 모은 경우
    if (numberOfPokemons >= 30) {
      myMedals.add(4)
    }

    // 10개 이상 모은 경우
    if (numberOfPokemons >= 10) {
      myMedals.add(3)
    }

    // 1개 이상 모은 경우
    if (numberOfPokemons >= 1) {
      myMedals.add(1)
    }

    dispatch(insertMedals(myMedals))
  }

  const okHandler = (): void => {
    const newSet = new Set(selectedPokemons)
    if (isSelectedAlready) {
      newSet.delete(currentPokemon.id)
    } else {
      newSet.add(currentPokemon.id)
    }
    dispatch(selectPokemon(newSet))
    setIsOpenModal(false)
  }

  const cancelHandler = (): void => {
    setIsOpenModal(false)
  }

  const resetFindPokemon = (): void => {
    dispatch(findPokemon(''))
  }

  useEffect(resetFindPokemon, [])
  useEffect(initOwnedPokemons, [selectedPokemons, isLock, keyword])
  useEffect(correctOwnedMedals, [ownedPokemons])

  const drawCealComponents = (): Array<ReactElement> => {
    return ownedPokemons.map((pokemon: PokemonType) => {
      return (
        <Ceal
          key={`${pokemon.id}${pokemon.name}`}
          isSelected={selectedPokemons.has(pokemon.id)}
          onClickEvent={openPokemonSelectionModal(pokemon)}
          {...pokemon}
        />
      )
    })
  }

  return (
    <div className="pokemon-list-layout">
      {drawDefaultMessage()}
      {drawCealComponents()}
      <Modal
        isOpen={isOpenModal}
        content={createModalContent()}
        onOkText={createModalOkText()}
        onOkEvent={okHandler}
        onCancelEvent={cancelHandler}
        onClickOutsideEvent={cancelHandler}
      />
    </div>
  )
}

export default PokemonList
