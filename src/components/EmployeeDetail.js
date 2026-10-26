import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail({ employees }) {
  const { id } = useParams();

  const employee = employees.find(
    (emp) => emp.employeeId === Number(id)
  );

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Title: {employee.title}</p>
      <p>Department: {employee.department}</p>
      <p>Employee ID: {employee.employeeId}</p>
    </div>
  );
}

export default EmployeeDetail;