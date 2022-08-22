import './app.scss'
import AppInfo from '../app-info/app-info'
import AppSearch from '../app-search/app-search'
import AppFilter from '../app-filter/appfilter'
import EmployeesList from '../app-employees-list/app-employees-list'
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form'
import { useState } from 'react'

function App() {
  const data = [
    { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
    { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
    { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
  ]
  const [state, setState] = useState(data)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const employeesCount = state.length
  const employeesCountToRise = state.filter(item => item.increase === true).length

  const onUpdSearch = (str) => {
    setSearch(str)
  }

  const onUpdFilter = (str) => {
    setFilter(str)
  }

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

  const searchEmp = (data, str) => {
    let searchStr = new RegExp(search, 'gi')
    if (str.length === 0) return data
    return data.filter(item => item.name.match(searchStr))
  }

  const filterEmp = (data, filter) => {
    switch (filter) {
      case 'all':
        return [...data]
      case 'toRise':
        return [...data].filter(item => item.rise === true)
      case 'moreThan1k':
        return [...data].filter(item => item.salary > 1000)
    }
  }

  const visibleData = filterEmp(searchEmp(state, search), filter)

  return (
    <div className="app">
      <div className="container">
        <AppInfo employeesCount={employeesCount} employeesCountToRise={employeesCountToRise} />
        <div className="search-panel">
          <AppSearch onUpdSearch={onUpdSearch} />
          <AppFilter filter={filter} onUpdFilter={onUpdFilter} />
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
