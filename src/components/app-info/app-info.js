import './app-info.css';

const AppInfo = ({ employees, increased }) => {
    return (
        <div className="app-info">
            <h1>Employee accounting at Noname</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>They will receive a prize: {increased}</h2>
        </div>
    )
}

export default AppInfo;