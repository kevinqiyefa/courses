import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

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
          <textarea
            value={course_description}
            onChange={props.handleInputChange}
            id="course_description"
            placeholder="Enter the description"
            className="form-control"
            name="course_description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="course_length">Course length (minutes)</label>
          <Slider
            max={120}
            min={0}
            value={length}
            id="course_length"
            onChange={props.handleSliderChange}
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
