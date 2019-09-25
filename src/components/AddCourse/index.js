import React, { Component } from 'react';

import AddEditCourse from '../Modals/AddEditCourse';

class AddCourse extends Component {
  state = {
    subject: 'English',
    length: 45,
    course_name: '',
    course_description: '',
    studentIDs: []
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSliderChange = value => {
    this.setState({ length: value });
  };

  handleSubmit = () => {
    if (this.state.course_name && this.state.course_description) {
      this.props.addCourse(this.state);
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
            data-target="#addEditCourseModal"
          >
            Add Course
          </button>
        </div>
        <AddEditCourse
          state={this.state}
          handleInputChange={this.handleInputChange}
          handleSliderChange={this.handleSliderChange}
          handleSubmit={this.handleSubmit}
          modalTitle={modalTitle}
          submitBtnText={submitBtnText}
        />
      </>
    );
  }
}

export default AddCourse;
