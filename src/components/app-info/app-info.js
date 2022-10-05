import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Звіт Співробітників</h1>
            <h2>Загальна к-сть співробітників: {employees} </h2>
            <h2>Премію получать: {increased} </h2>
        </div>
    )
}

export default AppInfo;