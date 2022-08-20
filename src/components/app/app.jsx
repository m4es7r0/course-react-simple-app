import { Component } from 'react'
import './app.scss'
import AppInfo from '../app-info/app-info'
import AppSearch from '../app-search/app-search'
import AppFilter from '../app-filter/appfilter'
import EmployeesList from '../app-employees-list/app-employees-list'
import EmployeesAddForm from '../app-employees-add-form/app-employees-add-form'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
      ],
      term:''
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.state.data.length + 1
    }
    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => item.id === id ? { ...item, [prop]: !item[prop] } : item)
    }))
  }

  onSearchEmp = (items, term) => {
    term.length == 0 ? items : items.filter(item => item.name.includes(term))
  }

  render() {
    const {data, term} = this.state
    const visibleData = this.onSearchEmp(data, term)

    return (
      <div className="app">
        <div className="container">
          <AppInfo EmployeesCount={this.state.data} />
          <div className="search-panel">
            <AppSearch />
            <AppFilter />
          </div>
          <div className="employees-list">
            <EmployeesList
              data={visibleData}
              onDelete={this.deleteItem}
              onToggleProp={this.onToggleProp} />
          </div>
          <div className="employees-list-add-form">
            <EmployeesAddForm onAdd={this.addItem} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;