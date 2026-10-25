import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import EmployeeForm from "./components/EmployeeForm";
import "./App.css";
import EmployeeDetail from '../EmployeeDetail';
import EmployeeList from '../EmployeeList';

function App() {
  // define the property for the employee, the function, and the default state.
  const [employees, setEmployees] = useState([]);

  // maintain an array of current employees
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // save the employee array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    // create the browser component and define the paths
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <EmployeeForm onSubmit={addEmployee} />
            <EmployeeList employees={employees} />
            <button onClick={saveData}>Save Data</button>
          </>
        } />
        <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;