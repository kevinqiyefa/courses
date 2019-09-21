import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import { fetchCoursesRequest } from '../../store/actions/courses';

function Course(props) {
  const pathName = props.location.pathname.slice(1);

  const { courses, loading } = useSelector(state => state.course);

  let course;

  const isValidCourseID = () => {
    course = courses.filter(c => c.id === +pathName)[0] || {};
    return !!Object.keys(course).length;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCoursesRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (courses.length && !isValidCourseID()) {
    return <Redirect to="/" />;
  }

  return <div>course</div>;
}

Course.propTypes = {};

export default Course;
