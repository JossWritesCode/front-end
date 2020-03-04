import React from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/actionCreators/projectCreators';
import Projects from '../CreatorApp/Projects';
const ProjectList = props => {
  const fetchProjects = e => {
    e.preventDefault();
    props.getProjects();
  };
  console.log('this is props ct', props);
  return (
    <div className='project=list'>
      <h1>Project List</h1>
      <div>
        {props.projects.map(projects => (
          <Projects key={projects.id} projects={projects} />
        ))}

        <button onClick={fetchProjects}>Projects</button>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  projects: state.projects,
  error: state.error
});

export default connect(mapStateToProps, { getProjects })(ProjectList);
