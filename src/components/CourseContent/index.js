import React from 'react';
import PropTypes from 'prop-types';
import CoursesContainer from '../../hoc/CoursesWrapper';
import './style.css';
import WarningAlert from '../WarningAlert';

function CourseContent({ course, deleteCourse }) {
  const warningMsg = 'Are you sure you want to do this?';
  return (
    <CoursesContainer
      title={course.course_name}
      description={course.course_description}
    >
      <div className="course-card-subject">
        <h5>Subject: {course.subject}</h5>
        <h5>Length: {course.length} mins</h5>
      </div>
      <div className="course-btns">
        <button type="button" className="btn btn-warning">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#deleteWarning"
        >
          Delete
        </button>
      </div>
      <WarningAlert message={warningMsg} deleteCourse={deleteCourse} />
    </CoursesContainer>
  );
}

CourseContent.propTypes = {
  course: PropTypes.object,
  deleteCourse: PropTypes.func
};

export default CourseContent;
