import React from 'react';
import { shallow } from 'enzyme';
import CourseContent from '../CourseContent';
import CoursesWrapper from '../CoursesWrapper';
import WarningAlert from '../Modals/WarningAlert';

import toJson from 'enzyme-to-json';

describe('Testing CourseContent Component', () => {
  let wrapped;
  const coursesData = {
    id: 111,
    subject: 'Math',
    length: 60,
    course_name: 'Algebra I',
    course_description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    studentIDs: [2, 5]
  };

  beforeEach(() => {
    wrapped = shallow(<CourseContent course={coursesData} />);
  });

  it('shows a CoursesWrapper section', () => {
    expect(wrapped.find(CoursesWrapper).length).toEqual(1);
  });

  it('shows a WarningAlert modal', () => {
    expect(wrapped.find(WarningAlert).length).toEqual(1);
  });

  it('matches snapshot', () => {
    const serialized = toJson(wrapped);
    expect(serialized).toMatchSnapshot();
  });
});
