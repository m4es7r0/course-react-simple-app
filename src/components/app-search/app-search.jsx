import { useState } from 'react'
import './app-search.scss'

const AppSearch = ({ onUpdSearch }) => {
  const [inputState, setInputState] = useState('')

  const toSearch = (str) => {
    onUpdSearch(str)
  }

  return (
    <input type="text" name='search' className="form-control search-input" placeholder="Найти сотрудника" value={inputState} onChange={(e) => {
      toSearch(e.target.value)
      setInputState(e.target.value)
    }} />
  )
}
export default AppSearch