import { useState } from 'react'
import './app-employees-list-item.scss'

const EmployeesListItem = ({
  name,
  salary,
  onDelete,
  onToggleProp,
  increase,
  rise,
}) => {
  const [inc, setInc] = useState(increase)
  const [like, setLike] = useState(rise)

  let listItemClassNames = 'list-group-item d-flex justify-content-between'
  inc ? (listItemClassNames += ' increase') : (listItemClassNames += '')
  like ? (listItemClassNames += ' like') : (listItemClassNames += '')

  return (
    <li className={listItemClassNames}>
      <span
        className="list-group-item-label"
        onClick={() => {
          onToggleProp
          setLike(!like)
        }}
        data-toggle="rise"
      >
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
          onClick={() => {
            onToggleProp
            setInc(!inc)
          }}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={() => onDelete()}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}
export default EmployeesListItem
