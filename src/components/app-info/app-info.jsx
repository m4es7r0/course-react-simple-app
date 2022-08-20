import './app-info.scss'

const AppInfo = ({ EmployeesCount }) => {
    const employeesCount = EmployeesCount.length
    const employeesToIncreaseCount = EmployeesCount.filter(elem => elem.increase === true).length

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>{`Общее число сотрудников: ${employeesCount}`}</h2>
            <h2>{`Премию получат: ${employeesToIncreaseCount}`}</h2>
        </div>
    )
}

export default AppInfo