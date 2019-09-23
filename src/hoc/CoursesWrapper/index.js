import React from 'react';
import PropTypes from 'prop-types';

function CoursesWrapper({ title, description, children }) {
  return (
    <div className="jumbotron container mt-5">
      <h1 className="display-3">{title}</h1>
      <p className="lead mb-5">{description}</p>
      {children}
    </div>
  );
}

CoursesWrapper.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CoursesWrapper;
