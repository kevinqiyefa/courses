import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import {
  fetchCoursesRequest,
  deleteCourseRequest,
  patchCourseRequest
} from '../../store/actions/courses';

import Loader from '../../components/Loader';
import CourseContent from '../../components/CourseContent';

function Course(props) {
  const pathName = props.location.pathname.slice(1);

  const { courses } = useSelector(state => state.course);

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

  const deleteCourse = () => dispatch(deleteCourseRequest(course.id));
  const patchCourse = updatedCourse => {
    dispatch(patchCourseRequest(course.id, updatedCourse));
  };

  return course ? (
    <CourseContent
      course={course}
      deleteCourse={deleteCourse}
      patchCourse={patchCourse}
    />
  ) : (
    <Loader />
  );
}

export default Course;
