import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

let Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <main className="main-content" id='portfolio'>
      <img className='project-image' src='./assets/images/budgetBuddy.png'/>
      <List component="nav">
        <ListItem
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          Weather Dashboard
        </ListItem>
        <ListItem
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          Budget Buddy
        </ListItem>
        <ListItem
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          Pathfinder
        </ListItem>
      </List>
    </main>
  );
};
export default Portfolio;
