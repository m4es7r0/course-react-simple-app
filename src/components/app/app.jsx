import './app.scss'
import AppInfo from '../app-info/app-info'
import AppSearch from '../app-search/app-search'
import AppFilter from '../app-filter/appfilter'
import EmployeesList from '../app-employees-list/app-employees-list'
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form'
import { useState } from 'react'

function App() {
  const data = [
    { name: 'John Smith', salary: 1000, increase: true, id: '1' },
    { name: 'Sam Cutch', salary: 700, increase: false, id: '2' },
    { name: 'Lara Smith', salary: 500, increase: false, id: '3' },
  ]

  const [state, setState] = useState(data)

  const deleteItem = (id) => {
    setState(state.filter(item => item.id !== id))
  }

  return (
    <div className="app">
      <div className="container">
        <AppInfo />
        <div className="search-panel">
          <AppSearch />
          <AppFilter />
        </div>
        <div className="employees-list">
          <EmployeesList data={state} onDelete={deleteItem} />
        </div>
        <div className="employees-list-add-form">
          <EmployeesAddForm />
        </div>
      </div>
    </div>
  )
}
export default App
