import React from "react";
import { AppBar, Toolbar, Typography } from "material-ui";
import logo from "./Images/opersTracker_Logo.png";

console.log(logo);

export default props => (
  <AppBar position="static">
    <Toolbar>
      <img
        src="https://uploads.codesandbox.io/uploads/user/21e62c85-25b9-4ac0-a30e-e3170524188d/wzSU-opersTracker_Logo.png"
        alt="UCSC OPERS"
      />
      {/* <Typography variant="headline" color="inherit">
        UCSC OPERS

      </Typography> */}
    </Toolbar>
  </AppBar>
);
