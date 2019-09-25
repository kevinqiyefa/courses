import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import TableRow from './TableRow';
import EditTableRow from './EditTableRow';

export class StudentTableRows extends Component {
  state = {
    students: [...this.props.editableStudents],
    isUpdated: false
  };

  static propTypes = {
    editableStudents: PropTypes.array,
    deleteStudent: PropTypes.func,
    patchStudent: PropTypes.func,
    courseID: PropTypes.number,
    studentIDs: PropTypes.array
  };

  static getDerivedStateFromProps(props, state) {
    if (
      props.editableStudents.length !== state.students.length ||
      state.isUpdated
    ) {
      console.log('innnn');
      return {
        students: [...props.editableStudents]
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  handleIsUpdated = bool => this.setState({ isUpdated: bool });

  toggleEditing = id => {
    this.setState({
      students: this.state.students.map(s => {
        if (s.id === id) {
          return { ...s, isEditing: !s.isEditing };
        }
        return s;
      })
    });
  };

  diplasyTableRows = (
    students,
    deleteStudent,
    courseID,
    studentIDs,
    patchStudent
  ) =>
    students.map((s, idx) =>
      !s.isEditing ? (
        <TableRow
          key={s.id}
          student={s}
          idx={idx}
          courseID={courseID}
          studentIDs={studentIDs}
          toggleEditing={this.toggleEditing}
          handleIsUpdated={this.handleIsUpdated}
          deleteStudent={deleteStudent}
        />
      ) : (
        <EditTableRow
          key={s.id}
          student={s}
          idx={idx}
          toggleEditing={this.toggleEditing}
          patchStudent={patchStudent}
          handleIsUpdated={this.handleIsUpdated}
        />
      )
    );

  render() {
    console.log(this.state.students);
    const { deleteStudent, courseID, studentIDs, patchStudent } = this.props;
    return (
      <tbody>
        {this.diplasyTableRows(
          this.state.students,
          deleteStudent,
          courseID,
          studentIDs,
          patchStudent
        )}
      </tbody>
    );
  }
}

export default StudentTableRows;
