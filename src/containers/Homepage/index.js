import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCoursesRequest } from '../../store/actions/courses';
import Loader from '../../components/Loader';
import Courses from '../../components/Courses';

function Homepage() {
  const { courses, loading } = useSelector(state => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesRequest());
  }, [dispatch]);

  return loading || !courses.length ? (
    <Loader />
  ) : (
    <Courses courses={courses} />
  );
}

export default Homepage;
