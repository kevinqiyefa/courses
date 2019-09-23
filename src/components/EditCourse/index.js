import React from 'react';
import PropTypes from 'prop-types';

import CourseForm from '../CourseForm';
import './style.css';

function EditCourse({
  state,
  handleInputChange,
  handleSliderChange,
  isComplete,
  handleSubmit,
  modalTitle,
  submitBtnText
}) {
  console.log('EditCourse');
  return (
    <div
      className="modal fade"
      id="editCourseModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editCourseModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {modalTitle}
            </h5>
            <button
              type="button"
              className="close close-add-course-modal"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <CourseForm
              state={state}
              handleInputChange={handleInputChange}
              handleSliderChange={handleSliderChange}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className={`btn btn-primary ${!isComplete() && 'disabled'}`}
              onClick={handleSubmit}
              data-dismiss={`${isComplete() && 'modal'}`}
            >
              {submitBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

EditCourse.propTypes = {
  state: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleSliderChange: PropTypes.func,
  isComplete: PropTypes.func,
  handleSubmit: PropTypes.func,
  modalTitle: PropTypes.string,
  submitBtnText: PropTypes.string
};

export default EditCourse;
