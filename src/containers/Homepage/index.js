import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCoursesRequest } from '../../store/actions/courses';
import Loader from '../../components/Loader';

function Homepage() {
  const { courses, loading } = useSelector(state => state.course);
  const dispatch = useDispatch();
  console.log(courses, loading);

  const fetchCourse = useCallback(() => {
    dispatch(fetchCoursesRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  return loading || courses.length === 0 ? <Loader /> : <div>sss</div>;
}

export default Homepage;
