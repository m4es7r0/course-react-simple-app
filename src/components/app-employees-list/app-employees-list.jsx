import './app-employees-list.scss'
import EmployeesListItem from '../app-employees-list-item/app-employees-list-item'

const EmployeesList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        return (
          <EmployeesListItem
            key={(Math.random() * (9000 - 0) + 0).toFixed(3)}
            {...item}
          />
        )
      })}
    </ul>
  )
}
export default EmployeesList
