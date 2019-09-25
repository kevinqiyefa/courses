import React from 'react';
import PropTypes from 'prop-types';

function EditTableRow({ student, idx, toggleEditing }) {
  const handleChange = e => {
    console.log(e.target.value);
  };
  return (
    <tr key={student.id}>
      <th scope="row">{idx + 1}</th>
      <td>
        <input
          type="text"
          className="form-control"
          value={student.first_name}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          value={student.last_name}
          onChange={handleChange}
        />
      </td>
      <td>
        <select
          className="form-control"
          value={student.grade_level}
          onChange={handleChange}
        >
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </select>
      </td>
      <td className="student-btns">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => toggleEditing(student.id)}
        >
          Save
        </button>
      </td>
    </tr>
  );
}

EditTableRow.propTypes = {
  student: PropTypes.object,
  idx: PropTypes.number,
  toggleEditing: PropTypes.func
};

export default EditTableRow;
