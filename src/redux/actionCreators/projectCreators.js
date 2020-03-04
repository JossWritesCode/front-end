import CREATE_PROJECT from '../actions/action'
// import axios from 'axios'
// import { createStore } from 'redux'
import { axiosWithAuth } from '../../components/utils/axiosWithAuth'

export const createProject = () => {
    return{
        type: CREATE_PROJECT
    }
}

export const create = dispatch => {
    dispatch(createProject());

    axiosWithAuth()
        .post('/projects')
        .then(res =>{
            console.log(res);
        })
        .catch(err => console.log(err))

}