import { useState } from 'react'
import './app-employees-add-form.scss'

const EmployeesAddForm = () => {
  let [employeeName, setEmployeeName] = useState('')
  let [employeeSalary, setEmployeeSalary] = useState('')

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          onChange={(event) => setEmployeeName(event.target.value)}
          value={employeeName}
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          onChange={(event) => setEmployeeSalary(event.target.value)}
          value={employeeSalary}
          type="number"
          className="form-control new-post-label"
          placeholder="ЗП в $?"
        />

        <button
          type="submit"
          className="btn btn-outline-light"
          onClick={(event) => {
            event.preventDefault()
          }}
        >
          Добавить
        </button>
      </form>
    </div>
  )
}
export default EmployeesAddForm
