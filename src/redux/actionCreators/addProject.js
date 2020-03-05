import {
  ADDPROJECT_START,
  ADDPROJECT_SUCCESS,
  ADDPROJECT_FAILURE
} from '../actions/action';
import { axiosWithAuth } from '../../components/utils/axiosWithAuth';

export const addProjects = (
  projectname,
  description,
  username,
  bio
) => dispatch => {
  dispatch({ type: ADDPROJECT_START });
  axiosWithAuth()
    .post(
      'https://vrfundingapp.herokuapp.com/projects',
      { projectname, description, username, bio },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        }
      }
    )
    .then(res => {
      console.log('api response', res);
      dispatch({
        type: ADDPROJECT_SUCCESS,
        payload: { projectname, description, username, bio }
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADDPROJECT_FAILURE, payload: err });
    });
};
