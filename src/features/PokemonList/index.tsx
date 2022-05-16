import React, { ReactElement, useEffect, useState } from 'react'
import './index.scss'
import { pokemons } from '@commons/pokemon.json'
import Ceal from '@components/Ceal'
import { PokemonType, DEFAULT_POKEMON } from '@commons/types'
import { useAppDispatch, useAppSelector } from '@redux/config'
import { selectPokemon } from '@redux/selectPokemonSlice'
import Modal from '@components/Modal'
import { findPokemon } from '@redux/findPokemonSlice'
import { insertMedals } from '@redux/hasPokemonSlice'

// TODO: 각 locationStorage나 redux-persist로 대체 필요
interface PokemonListProps {
  isLock?: boolean
}
const PokemonList = ({ isLock }: PokemonListProps): ReactElement => {
  const dispatch = useAppDispatch()
  const { keyword } = useAppSelector((state) => state.findPokemonSlice)
  const { selected } = useAppSelector((state) => state.selectPokemonSlice)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [currentPokemon, setCurrentPokemon] =
    useState<PokemonType>(DEFAULT_POKEMON)
  const [isSelected, setIsSelected] = useState<boolean>(false)
  // TODO: 두번 호출하는 것 삭제
  const { selected: selectedPokemon } = useAppSelector(
    (state) => state.selectPokemonSlice,
  )

  const extracted = isLock
    ? pokemons.filter(({ id }: PokemonType) => {
        return selected.includes(id)
      })
    : pokemons.filter((pokemon: PokemonType) => {
        const regex = new RegExp(keyword)
        return regex.test(pokemon.name)
      })

  const createDefaultMessage = () => {
    if (extracted.length < 1) {
      return isLock
        ? '보유중인 포켓몬이 없습니다.'
        : '검색 결과가 일치하지 않습니다.'
    }
    return
  }

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

  // TODO: useEffect로 분리 및 보관함에서도 변동하도록 수정
  const correctOwnMedals = () => {
    const myMedals = new Array<number>()
    const legendPokemons = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159]
    const ancientPokemons = [143, 144, 145, 146, 147]
    const strangePokemons = [1, 2, 3, 4]
    const numberOfPokemons = selectedPokemon.length

    const hasPokemons = (pokemons: Array<number>) => {
      const ownPokemonList = pokemons.filter((pokemon) => {
        return selected.includes(pokemon)
      })
      return JSON.stringify(ownPokemonList) === JSON.stringify(pokemons)
    }
    // 다 모은 경우
    if (numberOfPokemons >= 159) {
      myMedals.push(10)
    }

    // 전설의 포켓몬을 모은 경우
    if (hasPokemons(legendPokemons)) {
      myMedals.push(9)
    }

    // 고대 포켓몬을 모은 경우
    if (hasPokemons(ancientPokemons)) {
      myMedals.push(8)
    }

    // 이상해씨 진화 포켓몬을 모은 경우
    if (hasPokemons(strangePokemons)) {
      myMedals.push(2)
    }

    // 120개 이상 모은 경우
    if (numberOfPokemons >= 120) {
      myMedals.push(7)
    }

    // 90개 이상 모은 경우
    if (numberOfPokemons >= 90) {
      myMedals.push(6)
    }

    // 60개 이상 모은 경우
    if (numberOfPokemons >= 60) {
      myMedals.push(5)
    }

    // 30개 이상 모은 경우
    if (numberOfPokemons >= 30) {
      myMedals.push(4)
    }

    // // 10개 이상 모은 경우
    if (numberOfPokemons >= 10) {
      myMedals.push(3)
    }

    // 1개 이상 모은 경우
    if (numberOfPokemons >= 1) {
      myMedals.push(1)
    }

    dispatch(insertMedals(myMedals))
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

  useEffect(() => {
    correctOwnMedals()
  }, [selected])
  return (
    <div className="pokemon-list-layout">
      {createDefaultMessage()}
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
