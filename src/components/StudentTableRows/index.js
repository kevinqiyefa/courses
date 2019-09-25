import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class StudentTableRows extends Component {

  state={
    students: [],
    isInitialed: false
  }

  


  static propTypes = {
    students: PropTypes.array,
    deleteStudent: PropTypes.func,
    courseID: PropTypes.number,
    studentIDs: PropTypes.array
  };

  diplasyTableRows = (students, deleteStudent, courseID, studentIDs) =>
    students.map((s, idx) => (
      <tr key={s.id}>
        <th scope="row">{idx + 1}</th>
        <td>{s.first_name}</td>
        <td>{s.last_name}</td>
        <td>{s.grade_level}</td>
        <td className="student-btns">
          <button type="button" className="btn btn-warning">
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteStudent(s.id, courseID, studentIDs)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

  render() {
    const { students, deleteStudent, courseID, studentIDs } = this.props;
    return (
      <tbody>
        {this.diplasyTableRows(students, deleteStudent, courseID, studentIDs)}
      </tbody>
    );
  }
}

export default StudentTableRows;
