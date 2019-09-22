import React from 'react';
import PropTypes from 'prop-types';

function CourseForm(props) {
  const { subject, length, course_name, course_description } = props.state;

  return (
    <form>
      <fieldset className="text-left">
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            placeholder="Enter course name"
            value={course_name}
            name="course_name"
            onChange={props.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectSubject">Select a subject</label>
          <select
            className="form-control"
            id="selectSubject"
            value={subject}
            onChange={props.handleInputChange}
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
            placeholder="Enter the description"
            value={course_description}
            name="course_description"
            onChange={props.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="course_length">Course length (minutes)</label>
          <input
            type="number"
            className="form-control"
            id="course_length"
            placeholder="Enter the length"
            value={length}
            name="length"
            onChange={props.handleInputChange}
          />
        </div>
      </fieldset>
    </form>
  );
}

CourseForm.propTypes = {
  state: PropTypes.object,
  handleInputChange: PropTypes.func
};

export default CourseForm;
