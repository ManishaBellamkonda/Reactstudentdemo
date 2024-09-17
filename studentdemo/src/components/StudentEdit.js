import React, { useState, useEffect } from 'react';

const StudentEdit = ({ student, onUpdate }) => {
  const [updatedStudent, setUpdatedStudent] = useState(student);

  useEffect(() => {
    setUpdatedStudent(student);
  }, [student]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedStudent({ ...updatedStudent, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/students/${student.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedStudent),
    })
      .then(response => response.json())
      .then(data => onUpdate(data))
      .catch(error => console.error('Error updating student:', error));
  };

  return (
    <div className="student-edit">
      <h3>Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="input" name="name" value={updatedStudent.name} onChange={handleChange} />
        
        <label>Age</label>
        <input className="input" name="age" value={updatedStudent.age} onChange={handleChange} />
        
        <label>Marks 1</label>
        <input className="input" name="marks1" value={updatedStudent.marks1} onChange={handleChange} />
        
        <label>Marks 2</label>
        <input className="input" name="marks2" value={updatedStudent.marks2} onChange={handleChange} />
        
        <label>Marks 3</label>
        <input className="input" name="marks3" value={updatedStudent.marks3} onChange={handleChange} />
        
        <label>Marks 4</label>
        <input className="input" name="marks4" value={updatedStudent.marks4} onChange={handleChange} />
        
        <label>Marks 5</label>
        <input className="input" name="marks5" value={updatedStudent.marks5} onChange={handleChange} />
        
        <label>Percentage</label>
        <input className="input" name="percentage" value={updatedStudent.percentage} onChange={handleChange} />
        
        <label>Division</label>
        <input className="input" name="division" value={updatedStudent.division} onChange={handleChange} />
        
        <button className="button">Update</button>
      </form>
    </div>
  );
};

export default StudentEdit;
