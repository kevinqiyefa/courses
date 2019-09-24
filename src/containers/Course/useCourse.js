import { useSelector, useDispatch } from 'react-redux';
const useCheckAndFindCourse = pathName => {
  const { courses } = useSelector(state => state.course);

  let course;

  const isValidCourseID = () => {
    course = courses.filter(c => c.id === +pathName)[0] || {};
    return !!Object.keys(course).length;
  };

  const dispatch = useDispatch();
  const isValid = isValidCourseID();

  return [courses, course, dispatch, isValid];
};

export { useCheckAndFindCourse };
