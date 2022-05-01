import React, { ReactElement } from 'react'
import './index.scss'

const SearchBox = (): ReactElement => (
  <div className="search">
    <input type="text" placeholder="검색어를 입력해주세요." />
    <input type="button" value="search" />
  </div>
)

export default SearchBox
