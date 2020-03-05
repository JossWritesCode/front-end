import React, {useState}from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import {Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import {SubmitButton, Button} from '../../'
// import {useParams} from 'react-router-dom'
import { initialState } from '../../../redux/reducers/reducer'
import { createProject, create} from '../../../redux/actionCreators/updateProjCreator'
import {connect} from 'react-redux'


const UpdateProjectForm = ({className=''})=>{
    const [update, setUpdate] = useState(false)
    const [projectToUpdate, setProjToUpdate] = useState(initialState)
    // const {id} = useParams();

    const onChange = e => {
        setUpdate({...update, 
                [e.target.name]: e.target.value
        })
    }
    const updateProject = proj => {
        setUpdate(true);
        setProjToUpdate(proj);
    }
    
    const saveUpdate = e =>{
        e.preventDefault();
        axiosWithAuth()
            .put(`/projects/${projectToUpdate.id}`, projectToUpdate)
            .then(res =>{
                console.log(res);
                setProjToUpdate(initialState)

            })
            .catch(err => console.log(err))
    }

    const deleteUpdate = () =>{
        axiosWithAuth()
            .delete(`/projects/${projectToUpdate.id}`)
            .then(res => {
                console.log(res);

            })
            .catch(err => console.log(err))
    };


    return(
        <div className={`${className} FormContainer`}>
            <Form onSubmit={saveUpdate} className='Form'>
                <label>
                    Project Name
                    <Field type='text' name='project'/>
                </label>
                <label>
                    Project Description
                    <Field type='text' name='description'/>
                </label>
                <label>
                    Username
                    <Field type='username' 
                    name='username'
                    placeholder='Full Name'
                    onChange={onChange}
                    />
                </label>
                <label>
                    Bio
                    <Field type='text'
                     name='bio'/>
                </label>
            
            <SubmitButton onClick={updateProject}/>
            <Button onClick={deleteUpdate}/>
            </Form>
        </div>
    )

}
const mapStateToProps = (state) => ({
    project: state.project,
    error: state.error
});

export default connect(
    mapStateToProps, 
    {create, createProject})(UpdateProjectForm)

