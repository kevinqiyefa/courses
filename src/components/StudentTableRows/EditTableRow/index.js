import React, { useState } from 'react';
import PropTypes from 'prop-types';

function EditTableRow({
  student,
  idx,
  toggleEditing,
  patchStudent,
  handleIsUpdated
}) {
  const [firstName, setFirstName] = useState(student.first_name);
  const [lastName, setLastName] = useState(student.last_name);
  const [gradeLevel, setGradeLevel] = useState(student.grade_level);

  const handleSave = () => {
    const updateStudent = {
      first_name: firstName,
      last_name: lastName,
      grade_level: +gradeLevel
    };

    patchStudent(student.id, updateStudent);
    handleIsUpdated(true);
  };

  return (
    <tr key={student.id}>
      <th scope="row">{idx + 1}</th>
      <td>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </td>
      <td>
        <select
          className="form-control"
          value={gradeLevel}
          onChange={e => setGradeLevel(e.target.value)}
        >
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </select>
      </td>
      <td className="student-btns">
        <button type="button" className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      </td>
    </tr>
  );
}

EditTableRow.propTypes = {
  student: PropTypes.object,
  idx: PropTypes.number,
  toggleEditing: PropTypes.func,
  patchStudent: PropTypes.func,
  handleIsUpdated: PropTypes.func
};

export default EditTableRow;
