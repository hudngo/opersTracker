import React, { Fragment } from "react";
import { Grid, Paper, Typography, List, Button } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";
import mainImage from "../Layouts/Images/mainImg.png";

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 200,
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
    marginTop: 20,
    height: 400
  },
  Paper2: {
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    height: 600,
    overflowY: "auto"
  },
  root: {
    flexGrow: 1
  },
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  control: {
    padding: theme.spacing(2)
  }
});
export default ({
  exercises,
  atheltics,
  category,
  onSelect,
  exercise: {
    id,
    img = mainImage,
    title = "East Field House — Opers",
    // img = "https://uploads.codesandbox.io/uploads/user/21e62c85-25b9-4ac0-a30e-e3170524188d/wzSU-opersTracker_Logo.png",
    description = "Sports, exercise, and recreation complex",
    hours = ""
  }
}) => (
  <Grid container className={styles.root} spacing={2}>
    {/* <Grid container> */}
    <Grid item xs={3}>
      <Paper style={styles.banner}>
        <div style={{ padding: 20 }}>
          <img src={img} alt="img" />
        </div>
        <Typography variant="display1" style={{ marginTop: -30, padding: 20 }}>
          {title}
        </Typography>
        {/* <div style={{padding: 20}}>
          <img src={img} alt="img" />
        </div>
        <div>{exercises.img}</div> */}
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
    <Grid item sm={9}>
      <Paper style={styles.Paper2}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description} <br />
          {hours} <br />
          <Button
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScbvLtTiX53tSWpuVJhdyzwHbQuoX-J6n4Qiad2agzEZXUy_w/viewform"
          >
            reserve room
          </Button>
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={4}>
      <Paper>
        {/* {atheltics.map(([group, atheltics]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {atheltics.map(({ id, name }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={name} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )} */}
      </Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper>this is working</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper>this is working</Paper>
    </Grid>
  </Grid>
);
