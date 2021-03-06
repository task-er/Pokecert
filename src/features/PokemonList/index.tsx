import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
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
  const resetCurrentPokemonBuffer = useRef<typeof setTimeout>()
  const navigate = useNavigate()

  const initOwnedPokemons = useCallback((): void => {
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
  }, [isLock, keyword, selectedPokemons])

  const isSelectedAlready = useMemo((): boolean => {
    return selectedPokemons.has(currentPokemon.id)
  }, [currentPokemon])

  const checkIsEmptyOwnedPokemons = useCallback((): boolean => {
    return ownedPokemons.length < 1
  }, [ownedPokemons])

  const DefaultMessage = useMemo((): string | undefined => {
    const isEmptyOwnedPokemons = checkIsEmptyOwnedPokemons()

    if (isEmptyOwnedPokemons) {
      return isLock
        ? '???????????? ???????????? ????????????.'
        : '?????? ????????? ???????????? ????????????.'
    }
    return undefined
  }, [checkIsEmptyOwnedPokemons])

  const createModalContent = useCallback((): string => {
    if (isSelectedAlready) {
      return `??? ??????????????? no.${currentPokemon.no} ${currentPokemon.name} ???(???) ?????????????????????????`
    }
    return `??? ???????????? no.${currentPokemon.no} ${currentPokemon.name} ???(???) ?????????????????????????`
  }, [isSelectedAlready, currentPokemon])

  const createModalOkText = useCallback((): string => {
    if (isSelectedAlready) {
      return '??????'
    }
    return '??????'
  }, [isSelectedAlready])

  const openPokemonSelectionModal = useCallback(
    (pokemon: PokemonType): (() => void) => {
      return (): void => {
        setCurrentPokemon(pokemon)
        setIsOpenModal(true)
      }
    },
    [],
  )

  const hasPokemons = useCallback(
    ($pokemons: Array<number>): boolean => {
      const filteredPokemonList = $pokemons.filter((pokemonId: number) => {
        return selectedPokemons.has(pokemonId)
      })
      return JSON.stringify(filteredPokemonList) === JSON.stringify($pokemons)
    },
    [selectedPokemons],
  )

  const moveToComplete = useCallback((): void => {
    navigate('/complete')
  }, [])

  const moveToCompleteWhenCollectedAll = useCallback((): void => {
    if (!isComplete) {
      dispatch(setIsComplete(true))
      moveToComplete()
    }
  }, [isComplete])

  const cancelComplete = useCallback((): void => {
    if (isComplete) {
      dispatch(setIsComplete(false))
    }
  }, [isComplete])

  const correctOwnedMedals = useCallback((): void => {
    const myMedals = new Set<number>()
    const numberOfPokemons = selectedPokemons.size

    // ??? ?????? ??????
    if (numberOfPokemons >= 159) {
      myMedals.add(10)
      moveToCompleteWhenCollectedAll()
    } else {
      // ??? ????????? ?????? ??????
      cancelComplete()
    }

    // ????????? ???????????? ?????? ??????
    if (hasPokemons(legendPokemons)) {
      myMedals.add(9)
    }

    // ?????? ???????????? ?????? ??????
    if (hasPokemons(ancientPokemons)) {
      myMedals.add(8)
    }

    // ???????????? ?????? ???????????? ?????? ??????
    if (hasPokemons(strangePokemons)) {
      myMedals.add(2)
    }

    // 120??? ?????? ?????? ??????
    if (numberOfPokemons >= 120) {
      myMedals.add(7)
    }

    // 90??? ?????? ?????? ??????
    if (numberOfPokemons >= 90) {
      myMedals.add(6)
    }

    // 60??? ?????? ?????? ??????
    if (numberOfPokemons >= 60) {
      myMedals.add(5)
    }

    // 30??? ?????? ?????? ??????
    if (numberOfPokemons >= 30) {
      myMedals.add(4)
    }

    // 10??? ?????? ?????? ??????
    if (numberOfPokemons >= 10) {
      myMedals.add(3)
    }

    // 1??? ?????? ?????? ??????
    if (numberOfPokemons >= 1) {
      myMedals.add(1)
    }

    dispatch(insertMedals(myMedals))
  }, [selectedPokemons, moveToCompleteWhenCollectedAll, hasPokemons])

  const clearModalChangeDelay = useCallback((): void => {
    if (resetCurrentPokemonBuffer.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      clearInterval(resetCurrentPokemonBuffer.current as any)
    }
  }, [resetCurrentPokemonBuffer.current])

  const pushModalChangeDelay = useCallback((): void => {
    // modal opacity ???????????? ?????? ?????? ????????? ????????? ????????? ????????? currentPokemons??? ????????? ??????
    clearModalChangeDelay()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resetCurrentPokemonBuffer.current = setTimeout(() => {
      setCurrentPokemon({ ...currentPokemon })
    }, 200)
  }, [clearModalChangeDelay, currentPokemon])

  const okHandler = useCallback((): void => {
    const newSet = new Set(selectedPokemons)
    if (isSelectedAlready) {
      newSet.delete(currentPokemon.id)
    } else {
      newSet.add(currentPokemon.id)
    }
    dispatch(selectPokemon(newSet))
    pushModalChangeDelay()
    setIsOpenModal(false)
  }, [
    selectedPokemons,
    isSelectedAlready,
    currentPokemon,
    pushModalChangeDelay,
  ])

  const cancelHandler = useCallback((): void => {
    setIsOpenModal(false)
  }, [])

  const resetFindPokemon = useCallback((): void => {
    dispatch(findPokemon(''))
  }, [])

  const CealComponents = useMemo((): Array<ReactElement> => {
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
  }, [ownedPokemons, selectedPokemons])

  useEffect(clearModalChangeDelay, [currentPokemon])
  useEffect(resetFindPokemon, [])
  useEffect(initOwnedPokemons, [selectedPokemons, isLock, keyword])
  useEffect(correctOwnedMedals, [ownedPokemons])

  return (
    <div className="pokemon-list-layout">
      {DefaultMessage}
      {CealComponents}
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
