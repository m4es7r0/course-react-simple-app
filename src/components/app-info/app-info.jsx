import './app-info.scss'

const AppInfo = ({ employeesCount, employeesCountToRise }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании</h1>
      <h2>{`Общее число сотрудников: ${employeesCount}`}</h2>
      <h2>{`Премию получат: ${employeesCountToRise}`}</h2>
    </div>
  )
}

export default AppInfo
