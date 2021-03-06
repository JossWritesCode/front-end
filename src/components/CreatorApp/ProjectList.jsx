import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/actionCreators/projectCreators';
import Projects from '../CreatorApp/Projects';
import ProjectForm from '../Form/ProjectForm/ProjectForm';
const ProjectList = props => {
  // const fetchProjects = e => {
  //   e.preventDefault();

  // };
  useEffect(() => {
    props.getProjects();
  }, []);

  console.log('this is props ct', props);
  return (
    <div className='project=list'>
      <h1>Project List</h1>
      <div>
        {/* {props.projects.map(projects => (
          <Projects key={projects.id} projects={projects} />
        ))} */}
      </div>
      <ProjectForm />
    </div>
  );
};
const mapStateToProps = state => ({
  projects: state.projects,
  error: state.error
});

export default connect(mapStateToProps, { getProjects })(ProjectList);
