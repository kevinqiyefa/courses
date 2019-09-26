import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import StudentForm from '../StudentForm';
import StudentTableRows from '../StudentTableRows';

function StudentList({
  students,
  addStudent,
  deleteStudent,
  courseID,
  studentIDs,
  patchStudent
}) {
  const [filterInput, setFilterInput] = useState('');

  let filteredStudents = [...students];

  const regexCheck = (str, filteredStr) => {
    var patt = new RegExp(`^${filteredStr.toLowerCase()}`);
    return patt.test(str);
  };

  (() => {
    filteredStudents = students.filter(
      student =>
        regexCheck(student.first_name.toLowerCase(), filterInput) ||
        regexCheck(student.last_name.toLowerCase(), filterInput)
    );
  })();

  const addStudentFormCollapse = (
    <>
      <button
        type="button"
        className="btn-lg btn-success mt-5 add-student-btn"
        data-toggle="collapse"
        data-target="#addStudentFormCollapse"
        aria-expanded="false"
        aria-controls="addStudentFormCollapse"
      >
        Add Student
      </button>
      <div className="collapse container mt-5" id="addStudentFormCollapse">
        <div className="card card-body">
          <StudentForm
            addStudent={addStudent}
            courseID={courseID}
            studentIDs={studentIDs}
          />
        </div>
      </div>
    </>
  );

  const editableStudents = studentArray =>
    studentArray.map(s => {
      s.isEditing = false;
      return s;
    });

  return !students.length ? (
    <>
      <h3 className="container mt-5">
        Sorry there's no student in this class :'(
      </h3>
      {addStudentFormCollapse}
    </>
  ) : (
    <>
      {addStudentFormCollapse}
      <div
        className="form-group container  mt-5 mb-5 text-left"
        style={{ maxWidth: '30rem' }}
      >
        <label htmlFor="searchStudents">
          <h5> Search Students</h5>
        </label>
        <input
          type="text"
          className="form-control"
          id="searchStudents"
          placeholder="enter first or last name"
          value={filterInput}
          onChange={e => setFilterInput(e.target.value)}
        />
      </div>
      <table className="table table-striped container mt-5 mb-5">
        <thead>
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Grade Level</th>
            <th scope="col"> </th>
          </tr>
        </thead>

        <StudentTableRows
          editableStudents={editableStudents(filteredStudents)}
          deleteStudent={deleteStudent}
          courseID={courseID}
          studentIDs={studentIDs}
          patchStudent={patchStudent}
        />
      </table>
    </>
  );
}

StudentList.propTypes = {
  students: PropTypes.array,
  addStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
  patchStudent: PropTypes.func,
  courseID: PropTypes.number,
  studentIDs: PropTypes.array
};

export default StudentList;
