import React, { useState } from 'react';
import StudentCreate from './components/StudentCreate';
import StudentList from './components/StudentList'
import StudentEdit from './components/StudentEdit';
import './App.css';
const StudentApp = () => {
    const [students, setStudents] = useState([]);

    const editStudentById = (id, updatedStudent) => {
        const updatedStudents = students.map((student) => {
            if (student.id === id) {
                return { ...student, ...updatedStudent };
            }
            return student;
        });
        setStudents(updatedStudents);
    };

    const deleteStudentById = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
    };

    const createStudent = (student) => {
        const newStudent = { ...student, id: Math.round(Math.random() * 9999) };
        setStudents([...students, newStudent]);
    };

    return (
        <div>
            <StudentList students={students} onEdit={editStudentById} onDelete={deleteStudentById} />
            <StudentCreate onCreate={createStudent} />
        </div>
    );
};

export default StudentApp;
