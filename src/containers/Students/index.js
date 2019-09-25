import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NotFoundPage from '../../components/NotFoundPage';

import {
  fetchStudentsRequest,
  addStudentRequest,
  deleteStudentRequest,
  patchStudentRequest
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

  const fetchData = async () => {
    if (!courses.length) {
      await dispatch(fetchCoursesRequest());
    }
    if (!students.length) {
      await dispatch(fetchStudentsRequest());
    }
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  findStudents();

  if (students.length && !isValid) {
    return <NotFoundPage />;
  }

  const addStudent = (student, courseID, studentIDs) =>
    dispatch(addStudentRequest(student, courseID, studentIDs));

  const deleteStudent = (id, courseID, studentIDs) =>
    dispatch(deleteStudentRequest(id, courseID, studentIDs));
  const patchStudent = (studentID, updatedStudent) =>
    dispatch(patchStudentRequest(studentID, updatedStudent));

  const content =
    Object.keys(course).length && !loading ? (
      <StudentList
        students={studentsInCourse}
        addStudent={addStudent}
        deleteStudent={deleteStudent}
        courseID={+pathName}
        studentIDs={course.studentIDs}
        patchStudent={patchStudent}
      />
    ) : (
      <Loader />
    );

  return content;
}

export default Students;
