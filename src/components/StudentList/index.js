import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import StudentForm from '../StudentForm';
import StudentTableRows from '../StudentTableRows';

function StudentList({
  students,
  addStudent,
  deleteStudent,
  courseID,
  studentIDs
}) {
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
          editableStudents={editableStudents(students)}
          deleteStudent={deleteStudent}
          courseID={courseID}
          studentIDs={studentIDs}
        />
      </table>
    </>
  );
}

StudentList.propTypes = {
  students: PropTypes.array,
  addStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
  courseID: PropTypes.number,
  studentIDs: PropTypes.array
};

export default StudentList;
