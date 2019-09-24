import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function StudentList({ students }) {
  const tableRows = students.map((s, idx) => (
    <tr key={s.id}>
      <th scope="row">{idx + 1}</th>
      <td>{s.first_name}</td>
      <td>{s.last_name}</td>
      <td>{s.grade_level}</td>
      <td className="student-btns">
        <button
          type="button"
          className="btn btn-warning"
          data-toggle="modal"
          data-target="#addEditCourseModal"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#deleteWarning"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return !students.length ? (
    <>
      <h3 className="container mt-5">
        Sorry there's no student in this class :'(
      </h3>
      <button type="button" className="btn-lg btn-success mt-5 add-student-btn">
        Add Student
      </button>
    </>
  ) : (
    <>
      <button type="button" className="btn-lg btn-success mt-5">
        Add Student
      </button>
      <table className="table table-striped container mt-5">
        <thead>
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Grade Level</th>
            <th scope="col"> </th>
          </tr>
        </thead>

        <tbody className="student-table-body">{tableRows}</tbody>
      </table>
    </>
  );
}

StudentList.propTypes = {
  students: PropTypes.array
};

export default StudentList;
