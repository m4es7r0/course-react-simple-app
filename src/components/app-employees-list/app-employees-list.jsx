import './app-employees-list.scss'
import EmployeesListItem from '../app-employees-list-item/app-employees-list-item'

const EmployeesList = ({ data }) => {
  const listItems = data.map((item) => {
    const {id, ...itemProps} = item
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
      />
    )
  })

  return <ul className="app-list list-group">{listItems}</ul>
}
export default EmployeesList
