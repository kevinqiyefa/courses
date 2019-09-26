import { fetchStudentsSuccess } from '../students';
import { FETCH_STUDENTS_SUCCESS } from '../actionTypes';

describe('fetch course data', () => {
  it('has the correct type', () => {
    const action = fetchStudentsSuccess();
    expect(action.type).toEqual(FETCH_STUDENTS_SUCCESS);
  });

  it('has the correct payload', () => {
    const action = fetchStudentsSuccess({});
    expect(action.students).toEqual({});
  });
});
