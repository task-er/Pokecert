import React, { ReactElement, useState } from 'react'
import './index.scss'
import PokemonList from '@features/PokemonList'
import PageTop from '@features/PageTop'

const List = (): ReactElement => {
  const [keyword, setKeyword] = useState<string>('아')

  return (
    <div className="list-wrapper">
      <div className="list-layout">
        <PageTop />
        <PokemonList keyword={keyword} />
      </div>
    </div>
  )
}

export default List
