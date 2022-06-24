import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import './index.scss'
import { medals } from '@commons/medal.json'
import Medal from '@components/Medal'
import { DEFAULT_MEDAL, MedalType } from '@commons/types'
import { useAppSelector } from '@redux/config'
import Modal from '@components/Modal'

const MedalList = (): ReactElement => {
  const { myMedals } = useAppSelector((state) => state.hasMedalSlice)
  const [currentMedal, setCurrentMedal] = useState<MedalType>(DEFAULT_MEDAL)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [ownedMedals, setOwnedMedals] = useState<Array<MedalType>>([])

  const initOwnedMedals = useCallback((): void => {
    const extracted = medals.filter((medal: MedalType) => {
      return myMedals.has(medal.id)
    })
    setOwnedMedals(extracted)
  }, [myMedals])

  const openMedalModal = useCallback((medal: MedalType): (() => void) => {
    return (): void => {
      setCurrentMedal(medal)
      setIsOpenModal(true)
    }
  }, [])

  // toggling으로 변경
  const cancelHandler = useCallback((): void => {
    setIsOpenModal(false)
  }, [])

  const checkIsEmptyOwnedMedal = useCallback((): boolean => {
    return ownedMedals.length < 1
  }, [ownedMedals])

  const drawDefaultMessage = useCallback((): string | undefined => {
    const isEmptyOwnedMedal = checkIsEmptyOwnedMedal()
    if (isEmptyOwnedMedal) {
      return '보유중인 훈장이 없습니다.'
    }
    return undefined
  }, [checkIsEmptyOwnedMedal])

  const drawMedalComponents = useCallback((): Array<ReactElement> => {
    return ownedMedals.map((medal: MedalType) => {
      return (
        <Medal
          key={`${medal.id}${medal.name}`}
          medal={medal}
          onClickEvent={openMedalModal(medal)}
        />
      )
    })
  }, [ownedMedals])

  useEffect(initOwnedMedals, [myMedals])

  return (
    <div className="medal-list-layout">
      {drawDefaultMessage()}
      {drawMedalComponents()}
      <Modal
        isOpen={isOpenModal}
        title={currentMedal.name}
        content={currentMedal.content}
        onOkEvent={cancelHandler}
        onClickOutsideEvent={cancelHandler}
      />
    </div>
  )
}

export default MedalList
