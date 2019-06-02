import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

export default ({ areasBuildings, category, onSelect }) => {
  const index = category
    ? areasBuildings.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : areasBuildings[index - 1]);

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        // color=""
        textColor="primary"
      >
        <Tab label="All" />
        {areasBuildings.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};
