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

// TODO: 각 locationStorage나 redux-persist로 대체 필요
interface PokemonListProps {
  isLock?: boolean
}
const PokemonList = ({ isLock }: PokemonListProps): ReactElement => {
  const dispatch = useAppDispatch()
  const { keyword } = useAppSelector((state) => state.findPokemonSlice)
  const { selectedPokemons } = useAppSelector(
    (state) => state.selectPokemonSlice,
  )
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [currentPokemon, setCurrentPokemon] =
    useState<PokemonType>(DEFAULT_POKEMON)

  const extracted = isLock
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

  const isSelectedAlready = useMemo(() => {
    return selectedPokemons.has(currentPokemon.id)
  }, [currentPokemon])

  const createDefaultMessage = () => {
    if (extracted.length < 1) {
      return isLock
        ? '보유중인 포켓몬이 없습니다.'
        : '검색 결과가 일치하지 않습니다.'
    }
    return
  }

  const createModalContent = () => {
    if (isSelectedAlready) {
      return `내 보관함에서 no.${currentPokemon.no} ${currentPokemon.name} 을(를) 삭제하시겠습니까?`
    }
    return `내 보관함에 no.${currentPokemon.no} ${currentPokemon.name} 을(를) 추가하시겠습니까?`
  }

  const createModalOkText = () => {
    if (isSelectedAlready) {
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

  const correctOwnMedals = () => {
    const myMedals = new Set<number>()
    const legendPokemons = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159]
    const ancientPokemons = [143, 144, 145, 146, 147]
    const strangePokemons = [1, 2, 3, 4]
    const numberOfPokemons = selectedPokemons.size

    const hasPokemons = (pokemons: Array<number>) => {
      const ownPokemonList = pokemons.filter((pokemon) => {
        return selectedPokemons.has(pokemon)
      })
      return JSON.stringify(ownPokemonList) === JSON.stringify(pokemons)
    }
    // 다 모은 경우
    if (numberOfPokemons >= 159) {
      myMedals.add(10)
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

  const okHandler = () => {
    const newSet = new Set(selectedPokemons)
    if (isSelectedAlready) {
      newSet.delete(currentPokemon.id)
    } else {
      newSet.add(currentPokemon.id)
    }
    dispatch(selectPokemon(newSet))
    setIsOpenModal(false)
  }

  const cancelHandler = () => {
    setIsOpenModal(false)
  }

  useEffect(() => {
    dispatch(findPokemon(''))
  }, [])

  useEffect(() => {
    correctOwnMedals()
  }, [selectedPokemons])

  return (
    <div className="pokemon-list-layout">
      {createDefaultMessage()}
      {extracted.map(({ id, ...pokemon }: PokemonType) => {
        return (
          <Ceal
            key={`${id}${pokemon.name}`}
            isSelected={selectedPokemons.has(id)}
            onClickEvent={openPokemonSelectionModal({ id, ...pokemon })}
            {...pokemon}
          />
        )
      })}
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
