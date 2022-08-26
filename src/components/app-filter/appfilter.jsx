import './app-filter.scss'

const AppFilter = ({ filter, onUpdFilter }) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'toRise', label: 'На повышение' },
    { name: 'moreThan1k', label: 'ЗП > 1000$' },
  ]

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    
    
    return (
      <button
        key={name}
        name={name}
        type="button"
        className={`btn ${clazz}`}
      >
        {label}
      </button>
    )
  })

  const setFillter = (e) => {
    onUpdFilter(e.target.name)
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
      <div className="btn-group" // eslint-disable-line jsx-a11y/no-static-element-interactions 
        onClick={e => setFillter(e)}>
        {buttons}
      </div>
    </>
  )
}
export default AppFilter