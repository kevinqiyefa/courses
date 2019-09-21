import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function fetchCoursesRequest() {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_COURSES_REQUEST });
      // call the API for /courses, auth required
      let courses = await callAPI('get', '/courses', true);
      // dispatch the success action creator and the courses that we got back
      dispatch(fetchCoursesSuccess(courses));
    } catch (error) {
      dispatch(fetchCoursesFail(error));
      return Promise.reject();
    }
  };
}

export function fetchCoursesSuccess(courses) {
  return { type: t.FETCH_COURSES_SUCCESS, courses };
}

export function fetchCoursesFail(error) {
  return { type: t.FETCH_COURSES_FAIL, error };
}
