import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchCoursesRequest,
  addCourseRequest
} from '../../store/actions/courses';
import { fetchStudentsRequest } from '../../store/actions/students';
import Loader from '../../components/Loader';
import CourseCards from '../../components/CourseCards';
import AddCourse from '../../components/AddCourse';
import CoursesWrapper from '../../components/CoursesWrapper';

function Homepage() {
  const { courses, loading } = useSelector(state => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCoursesRequest());
      dispatch(fetchStudentsRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortByIdCourses = courses.sort((a, b) => b.id - a.id);
  const content = loading ? (
    <Loader />
  ) : (
    <CourseCards courses={sortByIdCourses} />
  );
  const title = 'Hello, Professor!';
  const description =
    "Welcome back! Here're your classes and students for the school year.";

  const addCourse = state => dispatch(addCourseRequest(state));

  return (
    <CoursesWrapper title={title} description={description}>
      <AddCourse addCourse={addCourse} />
      {content}
    </CoursesWrapper>
  );
}

export default Homepage;
