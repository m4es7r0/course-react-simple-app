import { useState } from 'react'
import './app-employees-add-form.scss'

const EmployeesAddForm = ({ onAdd }) => {
  let [employeeName, setEmployeeName] = useState('')
  let [employeeSalary, setEmployeeSalary] = useState('')

  return (
    <div className="app-add-form">
      <h1>Добавьте нового сотрудника</h1>
      <form
        className="add-form d-flex"
        onSubmit={(e) => {
          e.preventDefault()
          onAdd(employeeName, employeeSalary)
          setEmployeeName('')
          setEmployeeSalary('')
        }}
      >
        <input
          onChange={(event) => setEmployeeName(event.target.value)}
          value={employeeName}
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          minLength={3}
          required
        />
        <input
          onChange={(event) => setEmployeeSalary(event.target.value)}
          value={employeeSalary}
          type="number"
          className="form-control new-post-label"
          placeholder="ЗП в $?"
          min={0}
          required
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  )
}
export default EmployeesAddForm
