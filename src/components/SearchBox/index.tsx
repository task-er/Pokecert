import React, { ChangeEventHandler, ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/config'
import { findPokemon } from '@redux/findPokemonSlice'
import './index.scss'

const SearchBox = (): ReactElement => {
  const { keyword } = useAppSelector((state) => state.findPokemonSlice)
  const dispatch = useAppDispatch()

  const findKeyword: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(findPokemon(e.target.value))
  }

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="🔎 검색"
        value={keyword}
        onChange={findKeyword}
        data-cy="selection_search_input"
      />
    </div>
  )
}

export default SearchBox
