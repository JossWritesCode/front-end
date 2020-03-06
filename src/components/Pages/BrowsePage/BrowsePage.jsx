import React, { useEffect } from "react";
import { Header, FilterIcon, WindowPane } from "../../";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Far, Far, Away...",
    text:
      "Take a trip through the galaxy with your very own droid to save denizens far, far, away..."
  },
  {
    id: 2,
    title: "Talk to me",
    text:
      "All of your devices in one place, at one time, and right before your eyes..."
  },
  {
    id: 3,
    title: "Blind Guidance",
    text:
      "Explore terrains made by anonymous architects with only their shepards as your guide..."
  },
  {
    id: 4,
    title: "Game on",
    text:
      "Take down enemies while busting a move through our disco intergalatic laser gun range..."
  }
];

const BrowsePage = ({ className = "" }) => {
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axiosWithAuth().get("/projects");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getProjects();
  }, []);
  const projectList = projects.map(({ id, title, text }) => {
    return (
      <Link to={`/edit/${id}`}>
        <div key={id}>
          <div className="image-container">
            <img src="https://via.placeholder.com/122x77" alt="placeholder" />
          </div>
          <div className="text-container">
            <div className="text-container-title">{title}</div>
            <div>{text}</div>
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

export default BrowsePage;
