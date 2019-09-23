import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCoursesRequest } from '../../store/actions/courses';
import Loader from '../../components/Loader';
import Courses from '../../components/Courses';
import AddCourse from '../AddCourse';
import CoursesWrapper from '../../hoc/CoursesWrapper';

function Homepage() {
  const { courses, loading } = useSelector(state => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesRequest());
  }, [dispatch]);

  const content =
    loading || !courses.length ? <Loader /> : <Courses courses={courses} />;
  const title = 'Hello, Professor!';
  const description =
    "Welcome back! Here're your classes and students for the school year.";

  return (
    <CoursesWrapper title={title} description={description}>
      <AddCourse />
      {content}
    </CoursesWrapper>
  );
}

export default Homepage;
