import React from 'react';
import PropTypes from 'prop-types';

function WarningAlert({ message, deleteCourse }) {
  return (
    <div
      className="modal fade"
      id="deleteWarning"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="deleteWarningLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="deleteWarningLabel"
              style={{ color: 'red' }}
            >
              Warning
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{message}</div>
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
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={deleteCourse}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

WarningAlert.propTypes = {
  message: PropTypes.string,
  deleteCourse: PropTypes.func
};

export default WarningAlert;
