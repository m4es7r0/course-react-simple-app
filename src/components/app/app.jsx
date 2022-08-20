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
        { name: 'John C.', salary: 800, increase: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, id: 3 }
      ]
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
      id: this.state.data.length + 1
    }
    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <AppInfo />
          <div className="search-panel">
            <AppSearch />
            <AppFilter />
          </div>
          <div className="employees-list">
            <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
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