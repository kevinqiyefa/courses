import React from 'react';
import PropTypes from 'prop-types';

function TableRow({
  student,
  idx,
  courseID,
  studentIDs,
  toggleEditing,
  deleteStudent,
  handleIsUpdated
}) {
  const handleEditing = () => {
    toggleEditing(student.id);
    handleIsUpdated(false);
  };
  return (
    <tr>
      <th scope="row">{idx + 1}</th>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.grade_level}</td>
      <td className="student-btns">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleEditing}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteStudent(student.id, courseID, studentIDs)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  student: PropTypes.object,
  idx: PropTypes.number,
  courseID: PropTypes.number,
  studentIDs: PropTypes.array,
  toggleEditing: PropTypes.func,
  deleteStudent: PropTypes.func,
  handleIsUpdated: PropTypes.func
};

export default TableRow;
