import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './components/Header';
import Homepage from './containers/Homepage';

describe('<App />', () => {
  let wrapper;

  wrapper = shallow(<App />);

  it('shows a Header component', () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('shows a Homepage component', () => {
    wrapper = mount(<App />);
    expect(wrapper.find(Homepage).length).toEqual(1);
  });

  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
