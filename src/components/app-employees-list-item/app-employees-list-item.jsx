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
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
      <span // eslint-disable-line jsx-a11y/no-static-element-interactions
        className="list-group-item-label"
        onClick={() => {
          onToggleProp('rise', rise)
        }}
      >
        {name.length > 18 ? name.slice(0, 15)+'...' : name}
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
