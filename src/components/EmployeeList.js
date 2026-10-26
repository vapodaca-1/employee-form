import React from "react";
import { Link } from "react-router-dom";
import "./employees.css";

function EmployeeList({
  employees,
  onEdit,
  onDelete,
}) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <div className="employee-list">
      <h1>Employee List</h1>

      <ul>
        {employees.map((employee, index) => (
          <li key={employee.employeeId}>
            <Link
              to={`/employees/${employee.employeeId}`}
            >
              {employee.name}
            </Link>

            <button
              onClick={() => onEdit(index)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;