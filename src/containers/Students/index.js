import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import {
  fetchStudentsRequest,
  addStudentRequest
} from '../../store/actions/students';
import { fetchCoursesRequest } from '../../store/actions/courses';
import Loader from '../../components/Loader';
import { useCheckAndFindCourse } from '../Course/useCourse';
import StudentList from '../../components/StudentList';

function Students(props) {
  const pathName = props.location.pathname.split('/')[1];
  const { students, loading } = useSelector(state => state.student);

  const [courses, course, dispatch, isValid] = useCheckAndFindCourse(pathName);

  let studentsInCourse;

  const findStudents = () => {
    studentsInCourse = students.filter(s => s.courseID === +pathName);
    return studentsInCourse;
  };

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCoursesRequest());
    }
    if (!students.length) {
      dispatch(fetchStudentsRequest());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  findStudents();

  if (students.length && !isValid) {
    return <Redirect to="/" />;
  }

  const addStudent = (student, courseID, studentIDs) =>
    dispatch(addStudentRequest(student, courseID, studentIDs));

  const content =
    Object.keys(course).length && !loading ? (
      <StudentList
        students={studentsInCourse}
        addStudent={addStudent}
        courseID={+pathName}
        studentIDs={course.studentIDs}
      />
    ) : (
      <Loader />
    );

  return content;
}

export default Students;
