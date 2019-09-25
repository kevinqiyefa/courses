import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  students: [],
  loading: false
};

export default function studentsReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_STUDENTS_REQUEST:
      return { ...state, loading: true };
    case t.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.students,
        loading: false
      };
    case t.ADD_STUDENT_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.student]
      };
    case t.PATCH_STUDENT_SUCCESS:
      const updatedStudents = state.students.map(student =>
        student.id === action.studentID ? action.updatedStudent : student
      );
      return {
        ...state,
        students: updatedStudents
      };
    case t.DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.filter(
          student => student.id !== action.studentID
        )
      };
    default:
      return state;
  }
}
