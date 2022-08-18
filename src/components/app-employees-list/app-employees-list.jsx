import './app-employees-list.scss'
import EmployeesListItem from '../app-employees-list-item/app-employees-list-item'

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name={'John Smith'} salary={"1000$"} />
      <EmployeesListItem name={'Sam Cutch'} salary={"700$"} />
      <EmployeesListItem name={'Lara Smith'} salary={"500$"} />
    </ul>
  )
}
export default EmployeesList
