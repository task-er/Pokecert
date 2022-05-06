import React, { ReactElement } from 'react'
import './index.scss'

interface SearchBoxProps {
  keyword: string
  setKeyword: React.Dispatch<React.SetStateAction<string>>
}
const SearchBox = ({ keyword, setKeyword }: SearchBoxProps): ReactElement => (
  <div className="search-wrapper">
    <input
      type="text"
      placeholder="검색어를 입력해주세요."
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
    <input type="button" value="🔎검색" />
  </div>
)

export default SearchBox
