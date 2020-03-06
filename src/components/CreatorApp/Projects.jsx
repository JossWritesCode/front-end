import React from 'react';

const Projects = props => {
  console.log('this is props from Projects', props);
  return (
    <div>
      <h2>Project: {props.projects.projectname}</h2>
      <p>discription :{props.projects.description}</p>
      <p>username :{props.projects.username}</p>
      <p>bio : {props.projects.bio}</p>
    </div>
  );
};

export default Projects;
