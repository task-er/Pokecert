import React, { ReactElement, useState } from 'react'
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

  const extracted = medals.filter((medal: MedalType) => {
    return myMedals.has(medal.id)
  })

  const openMedalModal = (medal: MedalType) => {
    return () => {
      setCurrentMedal(medal)
      setIsOpenModal(true)
    }
  }

  // toggling으로 변경
  const cancelHandler = () => {
    setIsOpenModal(false)
  }

  return (
    <div className="medal-list-layout">
      {extracted.length < 1 && '보유중인 훈장이 없습니다.'}
      {extracted.map((medal: MedalType) => {
        return (
          <Medal
            key={`${medal.id}${medal.name}`}
            medal={medal}
            onClickEvent={openMedalModal(medal)}
          />
        )
      })}
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
