import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

const styles = theme => ({
  // Paper: {
  //   padding: 20,
  //   marginTop: 10,
  //   marginBottom: 10,
  //   height: 600,
  //   overflowY: "auto"
  // },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  Paper2: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 600,
    overflowY: "auto"
  }
});

export default ({
  areasBuildings,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an area or building from the list on the left."
  }
}) => (
  <Grid container>
    <Grid item xs={4}>
      <Paper style={styles.Paper}>
        {areasBuildings.map(([group, areasBuildings]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="ul">
                {areasBuildings.map(({ id, title }) => (
                  <ListItem key={id} button onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item xs={8}>
      <Paper style={styles.Paper2}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
