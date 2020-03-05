
import { axiosWithAuth } from '../../components/utils/axiosWithAuth'
// import CREATE_PROJECT from '../actions/action'
// import axios from 'axios'
// import { createStore } from 'redux'

export const CREATE_PROJECT = "CREATE_PROJECT";

export const createProject = (project) => {
    console.log(project)
    return {
        type: CREATE_PROJECT,
        payload: project
    }
}

export const create = dispatch => {
    dispatch(createProject());

    axiosWithAuth()
        .post('/projects')
        .then(res => {
            console.log('Project added',res);
        })
        .catch(err => console.log(err))

} 

