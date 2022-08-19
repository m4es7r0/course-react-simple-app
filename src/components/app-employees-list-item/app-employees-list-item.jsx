import './app-employees-list-item.scss'

const EmployeesListItem = ({ name, salary, increase }) => {
  let listItemClassNames = `app-list-item list-group-item d-flex justify-content-between`
  increase ? listItemClassNames += ' increase' : null

  return (
    <li className={listItemClassNames}>
      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        name="name"
        id="name"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}
export default EmployeesListItem
