import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCoursesRequest } from '../../store/actions/courses';

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

  return <div>sss</div>;
}

export default Homepage;
