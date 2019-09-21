import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import Course from '../Course';

function Courses({ courses }) {
  console.log(courses);

  const displayCourses = courses.map(c => (
    <Course
      key={uuid()}
      subject={c.subject}
      period={c.period}
      courseName={c.course_name}
      description={c.course_description}
    />
  ));
  return (
    <div className="jumbotron container mt-5">
      <h1 className="display-3">Hello, Professor!</h1>
      <p className="lead mb-5">
        Welcome back! Here're your classes and students for the school year.
      </p>

      {displayCourses}
    </div>
  );
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object)
};

export default Courses;
