import { connect } from 'react-redux';
import AddCourse from '../../components/AddCourse';
import { addCoursesRequest } from '../../store/actions/courses';

export default connect(
  null,
  { addCoursesRequest }
)(AddCourse);
