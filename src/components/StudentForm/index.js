import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function StudentForm({
  firstName,
  lastName,
  gradeLevel,
  setFirstName,
  setLastName,
  setGradeLevel
}) {
  return (
    <form>
      <fieldset className="text-left">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
      </fieldset>

      <fieldset className="form-group text-left">
        <label>Grade Level</label>
        <div className="grade-radio-btns">
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value={9}
                checked={gradeLevel === 9}
                onChange={e => setGradeLevel(+e.target.value)}
              />
              9
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value={10}
                checked={gradeLevel === 10}
                onChange={e => setGradeLevel(+e.target.value)}
              />
              10
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value={11}
                checked={gradeLevel === 11}
                onChange={e => setGradeLevel(+e.target.value)}
              />
              11
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value={12}
                checked={gradeLevel === 12}
                onChange={e => setGradeLevel(+e.target.value)}
              />
              12
            </label>
          </div>
        </div>
      </fieldset>

      <button
        type="button"
        className="btn btn-success font-weight-bold pl-3 pr-3 float-right"
        data-dismiss="modal"
      >
        Add !
      </button>
    </form>
  );
}

StudentForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  gradeLevel: PropTypes.number,
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setGradeLevel: PropTypes.func
};

export default StudentForm;
