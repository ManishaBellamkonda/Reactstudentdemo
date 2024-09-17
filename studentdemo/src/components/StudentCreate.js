import React, { useState } from 'react';

const StudentCreate = ({ onCreate }) => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    marks1: '',
    marks2: '',
    marks3: '',
    marks4: '',
    marks5: '',
    percentage: '',
    division: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(student);
    setStudent({
      name: '',
      age: '',
      marks1: '',
      marks2: '',
      marks3: '',
      marks4: '',
      marks5: '',
      percentage: '',
      division: ''
    });
  };

  return (
    <div className="student-create">
      <h3>Add a Student</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="input" name="name" value={student.name} onChange={handleChange} />
        
        <label>Age</label>
        <input className="input" name="age" value={student.age} onChange={handleChange} />
        
        <label>Marks 1</label>
        <input className="input" name="marks1" value={student.marks1} onChange={handleChange} />
        
        <label>Marks 2</label>
        <input className="input" name="marks2" value={student.marks2} onChange={handleChange} />
        
        <label>Marks 3</label>
        <input className="input" name="marks3" value={student.marks3} onChange={handleChange} />
        
        <label>Marks 4</label>
        <input className="input" name="marks4" value={student.marks4} onChange={handleChange} />
        
        <label>Marks 5</label>
        <input className="input" name="marks5" value={student.marks5} onChange={handleChange} />
        
        <label>Percentage</label>
        <input className="input" name="percentage" value={student.percentage} onChange={handleChange} />
        
        <label>Division</label>
        <input className="input" name="division" value={student.division} onChange={handleChange} />
        
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default StudentCreate;
