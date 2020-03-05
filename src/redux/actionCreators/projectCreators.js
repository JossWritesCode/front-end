import {
  FETCH_PROJECT_START,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE
} from '../actions/action';
import { axiosWithAuth } from '../../components/utils/axiosWithAuth';

export const getProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECT_START });
  axiosWithAuth()
    .get('https://vrfundingapp.herokuapp.com/projects/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log('this is from pc Carlos', res.data);
      dispatch({ type: FETCH_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_PROJECT_FAILURE, payload: err });
    });
};
