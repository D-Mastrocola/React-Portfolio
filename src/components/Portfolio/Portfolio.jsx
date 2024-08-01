import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ProjectCard from "./ProjectCard/ProjectCard";
import Header from "../Header/Header";

let Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Header />
      <main className="main-content" id="portfolio">
        <ProjectCard
          name="Budget Buddy"
          imagePath="budgetBuddy.png"
          desc="An app desinged to help small contractors find business, as well as clients with small porjects fine the right contractor for the right price. Contractors can place bids on projects that clients post and the client can then choose the right contractor for them. The user can login to see their projects and the bids that have been placed on them, as well as a list of jobs that are currently open."
          live="https://infinite-sea-98511.herokuapp.com/"
          code="https://github.com/smaheilman/Budget-buddy"
          index={0}
        />
        <ProjectCard
          name="Weather Dashboard"
          imagePath="weatherDashboard.png"
          desc="I made a Weather Dashboard that uses the OpenWeather API to get the weather for the requested location as well as the 5 day forcast. It uses HTML, CSS, Bootstrap, JavaScript, jQuery, and fetch."
          index={1}
        />
        <ProjectCard
          name="Pathfinder"
          imagePath="pathfinder.png"
          desc="A pathfinder visualizer based on the A* algorithm. Made using JavaScript. You can change the position of the start and end nodes by clicking and dragging. Place wall nodes by clicking on an empty node"
          index={2}
        />
      </main>
    </>
  );
};
export default Portfolio;
