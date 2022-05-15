import React, { ReactElement } from 'react'
import './index.scss'
import { medals } from '@commons/medal.json'
import Medal from '@components/Medal'
import { MedalType } from '@commons/types'
import { useAppSelector } from '@redux/config'

const MedalList = (): ReactElement => {
  const { myMedals } = useAppSelector((state) => state.hasPokemonSlice)

  const extracted = medals.filter((medal: MedalType) => {
    return myMedals.includes(medal.id)
  })

  return (
    <div className="medal-list-layout">
      {extracted.length < 1 && '보유중인 훈장이 없습니다.'}
      {extracted.map(({ id, ...medal }: MedalType) => {
        return <Medal key={`${id}${medal.name}`} id={id} />
      })}
    </div>
  )
}

export default MedalList
