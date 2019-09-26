import { fetchCoursesSuccess } from '../courses';
import { FETCH_COURSES_SUCCESS } from '../actionTypes';

describe('fetch course data', () => {
  it('has the correct type', () => {
    const action = fetchCoursesSuccess();
    expect(action.type).toEqual(FETCH_COURSES_SUCCESS);
  });

  it('has the correct payload', () => {
    const action = fetchCoursesSuccess({});
    expect(action.courses).toEqual({});
  });
});
