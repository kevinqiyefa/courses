import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function StudentList(props) {
  return (
    <table className="table table-striped container mt-5">
      <thead>
        <tr className="table-primary">
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Grade Level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>9</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  );
}

StudentList.propTypes = {};

export default StudentList;
