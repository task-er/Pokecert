import React, { ReactElement } from 'react'
import './index.scss'

const SearchBox = (): ReactElement => (
  <div className="search-wrapper">
    <input type="text" placeholder="검색어를 입력해주세요." />
    <input type="button" value="🔎검색" />
  </div>
)

export default SearchBox
