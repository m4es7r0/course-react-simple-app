import './app-employees-list.scss'
import EmployeesListItem from '../app-employees-list-item/app-employees-list-item'

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const listItems = data.map((item) => {
    let { id, ...itemProps } = item
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(param, paramValue) => onToggleProp(id, param, paramValue)}
      />
    )
  })

  return (
    data.length === 0 ? <div className='not-found'><h4>Нет таких сотрудников</h4></div> : <ul className="app-list list-group">{listItems}</ul>
  )
}
export default EmployeesList
