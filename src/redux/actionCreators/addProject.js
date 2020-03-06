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
    .post('https://vrfundingapp.herokuapp.com/projects', {
      projectname,
      description,
      username,
      bio
    })
    .then(res => {
      console.log('api response', res);
      dispatch({ type: ADDPROJECT_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADDPROJECT_FAILURE, payload: err });
    });
};
