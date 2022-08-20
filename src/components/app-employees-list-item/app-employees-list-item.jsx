import { useState } from 'react'
import './app-employees-list-item.scss'

const EmployeesListItem = ({ name, salary, onDelete }) => {
  let [rise, setRise] = useState('')
  let [like, setLike] = useState('')

  let listItemClassNames =
    `app-list-item list-group-item d-flex justify-content-between` + rise + like

  const employeeRise = () => {
    listItemClassNames.includes('increase') ? setRise('') : setRise(' increase')
  }

  const employeeLike = () => {
    listItemClassNames.includes('like') ? setLike('') : setLike(' like')
  }

  return (
    <li className={listItemClassNames}>
      <span className="list-group-item-label" onClick={() => employeeLike()}>
        {name}
      </span>
      <input
        type="text"
        name="name"
        id="name"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={() => employeeRise()}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={() => onDelete()}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}
export default EmployeesListItem
