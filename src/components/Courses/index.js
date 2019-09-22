import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';

import './style.css';

function Courses({ courses }) {
  const displayCourses = courses.map(c => (
    <Link
      className="card border-primary mb-3 card-link-el"
      key={uuid()}
      to={`/${c.id}`}
    >
      <h2 className="card-header">{c.course_name}</h2>
      <div className="card-body">
        <div className="course-card-subject">
          <h5>Subject: {c.subject}</h5>
          <h5>Length: {c.length} mins</h5>
        </div>
        <p className="card-text text-left">{c.course_description}</p>
      </div>
    </Link>
  ));
  return displayCourses;
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object)
};

export default Courses;
