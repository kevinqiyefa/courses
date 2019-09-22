import React, { PureComponent } from 'react';

import './style.css';
import CourseForm from '../CourseForm';
import PropTypes from 'prop-types';

class AddCourse extends PureComponent {
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
      this.props.addCoursesRequest(this.state);
    }
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-end mb-5">
          <button
            type="button"
            className="btn btn-primary add-course-btn"
            data-toggle="modal"
            data-target="#addCourseModal"
          >
            Add Course
          </button>
        </div>

        <div
          className="modal fade"
          id="addCourseModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addCourseModalTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Adding a New Course!
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
                  state={this.state}
                  handleInputChange={this.handleInputChange}
                  handleSliderChange={this.handleSliderChange}
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
                  className={`btn btn-primary ${!this.isComplete() &&
                    'disabled'}`}
                  onClick={this.handleSubmit}
                  data-dismiss={`${this.isComplete() && 'modal'}`}
                >
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

AddCourse.propTypes = {
  addCoursesRequest: PropTypes.func
};

export default AddCourse;
