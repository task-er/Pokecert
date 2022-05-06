import React, { ReactElement, useState } from 'react'
import './index.scss'
import PokemonList from '@features/PokemonList'
import PageTop from '@features/PageTop'

const List = (): ReactElement => {
  const [keyword, setKeyword] = useState<string>('')

  return (
    <div className="list-wrapper">
      <div className="list-layout">
        <PageTop keyword={keyword} setKeyword={setKeyword} />
        <PokemonList keyword={keyword} />
      </div>
    </div>
  )
}

export default List
