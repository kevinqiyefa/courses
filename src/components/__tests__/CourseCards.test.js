import React from 'react';
import { shallow } from 'enzyme';
import CourseCards from '../CourseCards';

import toJson from 'enzyme-to-json';

describe('Testing CourseCards Component', () => {
  let wrapped;
  const coursesData = [
    {
      id: 111,
      subject: 'Math',
      length: 60,
      course_name: 'Algebra I',
      course_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      studentIDs: [2, 5]
    }
  ];

  beforeEach(() => {
    wrapped = shallow(<CourseCards courses={coursesData} />);
  });

  it('shows a card section', () => {
    expect(wrapped.hasClass('card')).toEqual(true);
  });

  it('matches snapshot', () => {
    const serialized = toJson(wrapped);
    expect(serialized).toMatchSnapshot();
  });
});
