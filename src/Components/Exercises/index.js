import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 600,
    overflowY: "auto"
  },
  Paper1: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 200,
    overflowY: "auto"
  },
  // paper: {
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   whiteSpace: "nowrap",
  //   marginBottom: theme.spacing(1)
  //   height: 600;
  // },
  banner: {
    padding: 60,
    marginTop: 20
  },
  Paper2: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 200,
    overflowY: "auto"
  }
});

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an area or building from the list on the left."
  }
}) => (
  <Grid container>
    {/* <Grid container> */}
    <Grid item sm>
      <Paper style={styles.banner}>
        <Typography variant="display1" style={{ marginTop: 0, padding: 20 }}>
          {title}
        </Typography>
        <Typography
          variant="subheading"
          style={{ marginTop: -20, padding: 20 }}
        >
          {description}
        </Typography>
        {/* </Paper> */}
        {/* </Grid>
      <Grid item sm> */}
        <Grid item sm style={{ marginTop: -20, padding: 20 }}>
          {/* <Paper style={styles.Paper2}> */}
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Grid>
      </Paper>
      {/* </Grid> */}
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper2}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
