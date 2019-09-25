import React, { useEffect } from 'react';
import NotFoundPage from '../../components/NotFoundPage';

import {
  fetchCoursesRequest,
  deleteCourseRequest,
  patchCourseRequest
} from '../../store/actions/courses';

import Loader from '../../components/Loader';
import CourseContent from '../../components/CourseContent';
import { useCheckAndFindCourse } from './useCourse';

function Course(props) {
  const pathName = props.location.pathname.slice(1);

  const [courses, course, dispatch, isValid] = useCheckAndFindCourse(pathName);

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCoursesRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (courses.length && !isValid) {
    return <NotFoundPage />;
  }

  const deleteCourse = async () => {
    await dispatch(deleteCourseRequest(course.id));
    return props.history.push('/');
  };
  const patchCourse = updatedCourse => {
    dispatch(patchCourseRequest(course.id, updatedCourse));
  };

  return Object.keys(course).length ? (
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
