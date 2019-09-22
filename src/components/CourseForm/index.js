import React, { PureComponent } from 'react';

export default class CourseForm extends PureComponent {
  state = {
    subject: 'English',
    length: 45,
    course_name: '',
    course_description: '',
    students: [],
    isComplete: false
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <fieldset className="text-left">
          <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              placeholder="enter course name"
              value={this.state.course_name}
              name="course_name"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="selectSubject">Select a subject</label>
            <select
              className="form-control"
              id="selectSubject"
              value={this.state.subject}
              onChange={this.handleInputChange}
              name="subject"
            >
              <option value="Science">Science</option>
              <option value="Math">Math</option>
              <option value="English">English</option>
              <option value="Art">Art</option>
              <option value="Foreign Language">Foreign Language</option>
              <option value="Social studies">Social Studies</option>
              <option value="History">History</option>
              <option value="Music">Music</option>
              <option value="Physical education">Physical education</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="course_description">Course Description</label>
            <input
              type="text"
              className="form-control"
              id="course_description"
              placeholder="enter the description"
              value={this.state.course_description}
              name="course_description"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="course_length">Course length (minutes)</label>
            <input
              type="number"
              className="form-control"
              id="course_length"
              placeholder="enter the length"
              value={this.state.length}
              name="length"
              onChange={this.handleInputChange}
            />
          </div>
        </fieldset>
      </form>
    );
  }
}
