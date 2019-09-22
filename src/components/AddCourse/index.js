import React, { PureComponent } from 'react';

import './style.css';
import CourseForm from '../CourseForm';

class AddCourse extends PureComponent {
  state = {
    subject: 'English',
    length: 45,
    course_name: '',
    course_description: '',
    students: []
  };

  handleInputChange = e => {
    let value = e.target.value;
    if (e.target.name === 'length') value = +value;
    this.setState({ [e.target.name]: value });
  };

  isComplete = () => {
    return this.state.course_name && this.state.course_description;
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="d-flex justify-content-end mb-5">
          <button
            type="button"
            className="btn btn-primary add-course-btn"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Add Course
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
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

export default AddCourse;
