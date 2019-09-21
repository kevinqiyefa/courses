import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Course({ subject, period, courseName, description }) {
  console.log(subject, period, courseName, description);
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">{courseName}</div>
      <div className="card-body">
        <div className="course-card-subject">
          <h5>Subject: {subject}</h5>
          <h5>Length: {period} mins</h5>
        </div>
        <p className="card-text text-left">{description}</p>
      </div>
    </div>
  );
}

Course.propTypes = {
  subject: PropTypes.string,
  period: PropTypes.number,
  courseName: PropTypes.string,
  description: PropTypes.string
};

export default Course;
