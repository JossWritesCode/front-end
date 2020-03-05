import React, { useState } from 'react';
import { addProjects } from '../../../redux/actionCreators/addProject';
import { connect } from 'react-redux';
const ProjectForm = props => {
  const [add, setAdd] = useState({});
  const handleChange = e => {
    e.preventDefault();
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  console.log('this is from projectForm', props);
  const handleSubmit = e => {
    e.preventDefault();
    props.addProjects(add.projectname, add.description, add.username, add.bio);
    setAdd({ projectname: '', description: '', username: '', bio: '' });
    props.history.push('/projects');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='projectname'
          placeholder='Project'
          value={props.projectname}
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          value={props.description}
          onChange={handleChange}
        />
        <input
          type='text'
          name='username'
          placeholder='user name'
          value={props.username}
          onChange={handleChange}
        />
        <input
          type='text'
          name='bio'
          placeholder='bio'
          value={props.bio}
          onChange={handleChange}
        />
        <p>{props.projectname}</p>
        <p>{props.description}</p>
        <p>{props.username}</p>
        <p>{props.bio}</p>
        <button>Add</button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addProjects })(ProjectForm);
