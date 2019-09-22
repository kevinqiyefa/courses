import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCoursesRequest } from '../../store/actions/courses';
import Loader from '../../components/Loader';
import Courses from '../../components/Courses';
import AddCourse from '../../components/AddCourse';

function Homepage() {
  const { courses, loading } = useSelector(state => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesRequest());
  }, [dispatch]);

  const content =
    loading || !courses.length ? <Loader /> : <Courses courses={courses} />;

  return (
    <div className="jumbotron container mt-5">
      <h1 className="display-3">Hello, Professor!</h1>
      <p className="lead mb-5">
        Welcome back! Here're your classes and students for the school year.
      </p>

      <AddCourse />

      {content}
    </div>
  );
}

export default Homepage;
