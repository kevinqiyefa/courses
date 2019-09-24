import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function fetchStudentsRequest() {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_STUDENTS_REQUEST });
      // call the API for /students,

      let students = await callAPI('get', '/students');

      // dispatch the success action creator and the students that we got back
      dispatch(fetchStudentsSuccess(students));
    } catch (error) {
      dispatch(fetchStudentsFail(error));
      return Promise.reject();
    }
  };
}

export function fetchStudentsSuccess(students) {
  return { type: t.FETCH_STUDENTS_SUCCESS, students };
}

export function fetchStudentsFail(error) {
  return { type: t.FETCH_STUDENTS_FAIL, error };
}
