import React, { useEffect, useState } from 'react';

const StudentList = ({ onEdit }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/students/${id}`, {
      method: 'DELETE',
    })
      .then(() => setStudents(students.filter(student => student.id !== id)))
      .catch(error => console.error('Error deleting student:', error));
  };

  return (
    <div>
      <h2>Student Profiles</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}, {student.age}, {student.marks1}, {student.marks2}, {student.marks3}, {student.marks4}, {student.marks5}, {student.percentage}, {student.division}
            <button onClick={() => onEdit(student)}>Edit</button>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
