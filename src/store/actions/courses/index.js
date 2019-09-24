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

export function addCourseRequest(course) {
  return async dispatch => {
    try {
      // dispatch({ type: t.FETCH_COURSES_REQUEST });

      // call the API for /courses,

      let newCourse = await callAPI('post', '/courses', course);

      // dispatch the success action creator and the courses that we got back
      dispatch(addCourseSuccess(newCourse));
    } catch (error) {
      dispatch(addCourseFail(error));
      return Promise.reject();
    }
  };
}

export function addCourseSuccess(course) {
  return { type: t.ADD_COURSE_SUCCESS, course };
}

export function addCourseFail(error) {
  return { type: t.ADD_COURSE_FAIL, error };
}

export function patchCourseRequest(courseID, updatedC) {
  return async dispatch => {
    try {
      // dispatch({ type: t.PATCH_COURSES_REQUEST });

      // call the API for /courses/id,

      const updatedCourse = await callAPI(
        'patch',
        `/courses/${courseID}`,
        updatedC
      );

      dispatch(patchCourseSuccess(courseID, updatedCourse));
    } catch (error) {
      dispatch(patchCourseFail(error));
      return Promise.reject();
    }
  };
}

export function patchCourseSuccess(courseID, updatedCourse) {
  return { type: t.PATCH_COURSE_SUCCESS, courseID, updatedCourse };
}

export function patchCourseFail(error) {
  return { type: t.PATCH_COURSE_FAIL, error };
}

export function deleteCourseRequest(courseID) {
  return async dispatch => {
    try {
      // dispatch({ type: t.delete_COURSES_REQUEST });

      // call the API for /courses/id,

      await callAPI('delete', `/courses/${courseID}`);

      dispatch(deleteCourseSuccess(courseID));
    } catch (error) {
      dispatch(deleteCourseFail(error));
      return Promise.reject();
    }
  };
}

export function deleteCourseSuccess(courseID) {
  return { type: t.DELETE_COURSE_SUCCESS, courseID };
}

export function deleteCourseFail(error) {
  return { type: t.DELETE_COURSE_FAIL, error };
}
