import './app.scss'
import AppInfo from '../app-info/app-info'
import AppSearch from '../app-search/app-search'
import AppFilter from '../app-filter/appfilter'
import EmployeesList from '../app-employees-list/app-employees-list'
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form'
import { useState } from 'react'

function App() {
  const data = [
    { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
    { name: 'Alex M.', salary: 3000, increase: true, rise: true, id: 2 },
    { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
  ]
  const searchValue = ''

  const [state, setState] = useState(data)
  const [search, setSearch] = useState(searchValue)

  const employeesCount = state.length
  const employeesCountToRise = state.filter(item => item.increase === true).length

  const deleteItem = (id) => {
    setState(state.filter(item => item.id !== id))
  }

  const onAdd = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: state.length + 1,
    }
    setState(state => state = [...state, newItem])
  }

  const onToggleProp = (id, param, paramValue) => {
    setState(state => state = state.map(item => item.id === id ? { ...item, [param]: !paramValue } : item))
  }

  const onUpdSearch = (str) => {
    setSearch(str)
  }

  const onUpdFilter = (param) => {
    
  }

  const searchEmp = (items, str) => {
    let searchStr = new RegExp(search, 'gi')
    if (str.length === 0) return items
    return items.filter(item => item.name.match(searchStr))
  }
  const visibleData = searchEmp(state, search)



  return (
    <div className="app">
      <div className="container">
        <AppInfo employeesCount={employeesCount} employeesCountToRise={employeesCountToRise} />
        <div className="search-panel">
          <AppSearch onUpdSearch={onUpdSearch} />
          <AppFilter />
        </div>
        <div className="employees-list">
          <EmployeesList data={visibleData} onDelete={deleteItem} onToggleProp={onToggleProp} />
        </div>
        <div className="employees-list-add-form">
          <EmployeesAddForm onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}
export default App
