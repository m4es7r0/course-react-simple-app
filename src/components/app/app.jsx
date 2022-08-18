import './app.scss'
import AppInfo from '../app-info/app-info'
import AppSearch from '../app-search/app-search'
import AppFilter from '../app-filter/appfilter'
import EmployeesList from '../app-employees-list/app-employees-list'
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form'

function App() {
  return (
    <div className="app">
      <div className="container">
        <AppInfo />
        <div className="search-panel">
          <AppSearch />
          <AppFilter />
        </div>
        <div className="employees-list">
          <EmployeesList />
        </div>
        <div className="employees-list">
          <EmployeesAddForm />
        </div>
      </div>
    </div>
  )
}
export default App
