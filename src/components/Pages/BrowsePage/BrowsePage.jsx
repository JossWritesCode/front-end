import React, { useEffect, useState } from "react";
import { Header, FilterIcon, WindowPane } from "../../";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const BrowsePage = ({ className = "" }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axiosWithAuth().get("/projects");
        console.log(response);

        setProjects(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProjects();
  }, []);
  const projectList = projects.map(({ id, projectname, description }) => {
    return (
      <Link key={id} to={`/edit/${id}`}>
        <div>
          <div className="image-container">
            <img src="https://via.placeholder.com/122x77" alt="placeholder" />
          </div>
          <div className="text-container">
            <div className="text-container-title">{projectname}</div>
            <div>{description}</div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className={`${className} BrowsePage Page`}>
      <Header title="Browse" />
      <div className="browse-controls">
        <div className="filter-control">
          <FilterIcon /> <p>Filter</p>
        </div>
        <div className="display-control">
          <FormatListBulletedIcon fontSize="medium" />
          <WindowPane />
        </div>
      </div>

      <div className="Container Projects">{projectList}</div>
    </div>
  );
};

const mapStateToProps = ({ list: projectList }) => ({ projectList });

export default connect(mapStateToProps, null)(BrowsePage);
