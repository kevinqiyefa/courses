import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { fetchStudentsRequest } from '../../store/actions/students';
import { fetchCoursesRequest } from '../../store/actions/courses';
import Loader from '../../components/Loader';
import { useCheckAndFindCourse } from '../Course/useCourse';

function Students(props) {
  const pathName = props.location.pathname.split('/')[1];
  const { students, loading } = useSelector(state => state.student);

  const [courses, , dispatch, isValid] = useCheckAndFindCourse(pathName);

  let studentsInCourse;

  // const findStudentsCheckID = () => {
  //   debugger;
  //   studentsInCourse = students.filter(s => s.courseID === +pathName);
  //   return !!studentsInCourse.length;
  // };

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCoursesRequest());
    }
    if (!students.length) {
      dispatch(fetchStudentsRequest());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(studentsInCourse);

  if (students.length && !isValid) {
    return <Redirect to="/" />;
  }

  const content = loading ? <Loader /> : <div>test</div>;
  // const title = 'Hello, Professor!';
  // const description =
  //   "Welcome back! Here're your classes and students for the school year.";

  return content;
}

export default Students;
