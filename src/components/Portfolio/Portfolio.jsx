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
          live="https://d-mastrocola.github.io/Weather-Dashboard/"
          code="https://github.com/D-Mastrocola/Weather-Dashboard"
        />
        <ProjectCard
          name="Pathfinder"
          imagePath="pathfinder.png"
          desc="A pathfinder visualizer based on the A* algorithm. Made using JavaScript. You can change the position of the start and end nodes by clicking and dragging. Place wall nodes by clicking on an empty node"
          index={2}
          live="https://d-mastrocola.github.io/Path-Finder-Visualizer/"
          code="https://github.com/D-Mastrocola/Path-Finder-Visualizer"
        />
        <ProjectCard
          name="Taskinator"
          imagePath="taskinator.png"
          desc="Using JavaScript I took input from the form and used it to create new DOM elements. I learned about the event.preventDefault() function to prevent page from reloding on form submit. I learned about data attributes and using local storage to save the tasks to browser."
          index={3}
          live="https://d-mastrocola.github.io/Taskinator/"
          code="https://github.com/D-Mastrocola/Taskinator"
        />
        <ProjectCard
          name="JavaScript Craft"
          imagePath='minecraft.png'
          index={4}
          desc="A simple minecraft clone made with THREEjs. The terrain is generated using perlin noise to create smoother terrain with randomness to make it feel organic. Minecraft was my favorite game growing up so it was a lot of fun making a simple version of it"
          live="https://d-mastrocola.github.io/JavaScriptCraft/"
          code="https://github.com/D-Mastrocola/JavaScriptCraft"
        />
        <ProjectCard
          name="Run Buddy"
          imagePath='runbuddy.png'
          index={5}
          desc="A mockup website for a fake company named Run Buddy Inc. I used HTML and CSS. I made sure that images had alt tags and I used the most accessable tags for screen readers; and I used media queries to make it responsive to any screen size."
          live="https://d-mastrocola.github.io/run-buddy/"
          code="https://github.com/D-Mastrocola/run-buddy"
        />
        <ProjectCard
          name="Platformer"
          imagePath='platformer.png'
          index={6}
          desc="A platformer game made using vanilla javascript. Features 2D box collision detection, Game physics, Multiple levels that are stored as text, powerups , and gamestate. Try out this puzzle game and see how far you can get."
          live="https://d-mastrocola.github.io/Platformer/"
          code="https://github.com/D-Mastrocola/Platformer"
        />
        <ProjectCard
          name="Coding Test"
          imagePath='codeQuiz.png'
          index={7}
          desc="Using JavaScript I used a game loop to to keep track of time. I made an array of question objects and everytime the user answers a question it grabs an random question from the list and deletes it. If the time runs out the quiz ends or if all the questions have been answered the test ends. If the user's score is a highscore a form is created and the highscore list is saved to local storage."
          live="https://d-mastrocola.github.io/Code-Quiz-Challenge/"
          code="https://github.com/D-Mastrocola/Code-Quiz-Challenge"
        />
        <ProjectCard
          name="Stock Watchlist"
          imagePath='stockWatchList.png'
          index={8}
          desc="I worked with a team and used Agile Development Methodologies. Usning finnhub.io and google charts we got stock data and displayed it on the page. I developed the ticker list which gets random tickers from finnhub.io then displays them on the page and saves it to local storage. I also developed the serach functionality which adds ticker to the list and local storage as well as the ticker details page."
          live="https://d-mastrocola.github.io/Stock-Watchlist/"
          code="https://github.com/D-Mastrocola/Stock-Watchlist"
        />
        
      </main>
    </>
  );
};
export default Portfolio;
