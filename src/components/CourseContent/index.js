import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CoursesContainer from '../CoursesWrapper';
import './style.css';
import WarningAlert from '../Modals/WarningAlert';
import AddEditCourse from '../Modals/AddEditCourse';

class CourseContent extends Component {
  state = {
    ...this.props.course
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSliderChange = value => {
    this.setState({ length: value });
  };

  handleSubmit = () => {
    const { isInitialed, ...updatedCourse } = this.state;

    this.props.patchCourse(updatedCourse);
  };

  render() {
    const { course, deleteCourse } = this.props;
    const warningMsg = 'Are you sure you want to do this?';

    const modalTitle = 'Editing a course!';
    const submitBtnText = 'Edit Course';

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
          <Link to={`/${course.id}/students`}>
            <button type="button" className="btn btn-success">
              View Students
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-warning"
            data-toggle="modal"
            data-target="#addEditCourseModal"
          >
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
        <AddEditCourse
          state={this.state}
          handleInputChange={this.handleInputChange}
          handleSliderChange={this.handleSliderChange}
          handleSubmit={this.handleSubmit}
          modalTitle={modalTitle}
          submitBtnText={submitBtnText}
        />
      </CoursesContainer>
    );
  }
}

CourseContent.propTypes = {
  course: PropTypes.object,
  deleteCourse: PropTypes.func,
  patchCourse: PropTypes.func
};

export default CourseContent;
