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

  let listItemClassNames = 'list-group-item d-flex justify-content-between'
  increase ? (listItemClassNames += ' increase') : (listItemClassNames += '')
  rise ? (listItemClassNames += ' like') : (listItemClassNames += '')

  return (
    <li className={listItemClassNames}>
      <span
        className="list-group-item-label"
        onClick={() => {
          onToggleProp('rise', rise)
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
            onToggleProp('increase', increase)
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
