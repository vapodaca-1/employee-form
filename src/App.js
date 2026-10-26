import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management System</h1>
      <p>Welcome to the Home Page.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About</h1>
      <p>
        This application demonstrates React Forms,
        Event Handling, React Router, and Local Storage.
      </p>
    </div>
  );
}

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedEmployees =
      localStorage.getItem("employees");

    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, []);

  const saveData = (employeeData) => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employeeData)
    );
  };

  const addEmployee = (employee) => {
    if (editingIndex !== null) {
      const updatedEmployees = [...employees];

      updatedEmployees[editingIndex] = employee;

      setEmployees(updatedEmployees);
      saveData(updatedEmployees);

      setEditingIndex(null);
    } else {
      const updatedEmployees = [
        ...employees,
        employee,
      ];

      setEmployees(updatedEmployees);
      saveData(updatedEmployees);
    }
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter(
      (_, i) => i !== index
    );

    setEmployees(updatedEmployees);
    saveData(updatedEmployees);

    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };

  const editEmployee = (index) => {
    setEditingIndex(index);
  };

  return (
    <BrowserRouter>
      <div>
        <nav
          style={{
            padding: "15px",
            backgroundColor: "#1e3a8a",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              marginRight: "20px",
            }}
          >
            Home
          </Link>

          <Link
            to="/employee"
            style={{
              color: "white",
              marginRight: "20px",
            }}
          >
            Employee Form
          </Link>

          <Link
            to="/about"
            style={{
              color: "white",
            }}
          >
            About
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/employee"
            element={
              <div style={{ padding: "20px" }}>
                <EmployeeForm
                  addEmployee={addEmployee}
                  employeeToEdit={
                    editingIndex !== null
                      ? employees[editingIndex]
                      : null
                  }
                />
                
                <EmployeeList
                  employees={employees}
                  onEdit={editEmployee}
                  onDelete={deleteEmployee}
                />
              </div>
            }
          />

          <Route
            path="/employees/:id"
            element={
              <EmployeeDetail
                employees={employees}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;