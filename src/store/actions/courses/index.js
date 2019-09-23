import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function fetchCoursesRequest() {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_COURSES_REQUEST });
      // call the API for /courses,

      let courses = await callAPI('get', '/courses');

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

export function addCoursesRequest(course) {
  return async dispatch => {
    try {
      // dispatch({ type: t.FETCH_COURSES_REQUEST });

      // call the API for /courses,

      let newCourse = await callAPI('post', '/courses', course);

      console.log();

      // dispatch the success action creator and the courses that we got back
      dispatch(addCoursesSuccess(newCourse));
    } catch (error) {
      dispatch(addCoursesFail(error));
      return Promise.reject();
    }
  };
}

export function addCoursesSuccess(course) {
  return { type: t.ADD_COURSES_SUCCESS, course };
}

export function addCoursesFail(error) {
  return { type: t.ADD_COURSES_FAIL, error };
}

export function deleteCoursesRequest(courseID) {
  return async dispatch => {
    try {
      // dispatch({ type: t.delete_COURSES_REQUEST });

      // call the API for /courses/id,

      await callAPI('delete', `/courses/${courseID}`);

      dispatch(deleteCoursesSuccess(courseID));
    } catch (error) {
      dispatch(deleteCoursesFail(error));
      return Promise.reject();
    }
  };
}

export function deleteCoursesSuccess(courseID) {
  return { type: t.DELETE_COURSES_SUCCESS, courseID };
}

export function deleteCoursesFail(error) {
  return { type: t.DELETE_COURSES_FAIL, error };
}
