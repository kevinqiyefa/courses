import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';
import { patchCourseRequest } from '../courses';

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

export function addStudentRequest(student, courseID, studentIDs) {
  return async dispatch => {
    try {
      // call the API for /students,

      let newStudent = await callAPI('post', '/students', student);

      const newstudentIDs = [...studentIDs, newStudent.id];

      // dispatch the success action creator and the students that we got back
      dispatch(addStudentSuccess(newStudent));
      dispatch(patchCourseRequest(courseID, { studentIDs: newstudentIDs }));
    } catch (error) {
      dispatch(addStudentFail(error));
      return Promise.reject();
    }
  };
}

export function addStudentSuccess(student) {
  return { type: t.ADD_STUDENT_SUCCESS, student };
}

export function addStudentFail(error) {
  return { type: t.ADD_STUDENT_FAIL, error };
}
