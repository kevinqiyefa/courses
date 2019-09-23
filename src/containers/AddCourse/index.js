import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditCourse from '../../components/EditCourse';
import { addCourseRequest } from '../../store/actions/courses';

class AddCourse extends Component {
  state = {
    subject: 'English',
    length: 45,
    course_name: '',
    course_description: '',
    students: []
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSliderChange = value => {
    this.setState({ length: value });
  };

  isComplete = () => {
    return this.state.course_name && this.state.course_description;
  };

  handleSubmit = () => {
    if (this.isComplete()) {
      this.props.addCourseRequest(this.state);
    }
  };

  render() {
    const modalTitle = 'Adding a New Course!';
    const submitBtnText = 'Add Course';

    return (
      <>
        <div className="d-flex justify-content-end mb-5">
          <button
            type="button"
            className="btn btn-primary add-course-btn"
            data-toggle="modal"
            data-target="#editCourseModal"
          >
            Add Course
          </button>
        </div>
        <EditCourse
          state={this.state}
          handleInputChange={this.handleInputChange}
          handleSliderChange={this.handleSliderChange}
          isComplete={this.isComplete}
          handleSubmit={this.handleSubmit}
          modalTitle={modalTitle}
          submitBtnText={submitBtnText}
        />
      </>
    );
  }
}

export default connect(
  null,
  { addCourseRequest }
)(AddCourse);
