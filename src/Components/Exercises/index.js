import React, { Fragment } from "react";
import { Grid, Paper, Typography, List, Button } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";
import mainImage from "../Layouts/Images/mainImg.png";
import { typography } from "material-ui/styles";

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
    height: 250,
    overflowY: "auto"
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
    population,
    link,
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
        {/* <div style={{
  
            height: 400,
            overflowY: "auto"
          }}> */}
        <div style={{ padding: 20 }}>
          <img src={img} alt="img" />
        </div>

        <Typography variant="display1" style={{ marginTop: -30, padding: 20 }}>
          {title}
        </Typography>
        <Typography
          variant="subheading"
          style={{ marginTop: -20, padding: 20, whiteSpace: "pre-line" }}
        >
          {population}
        </Typography>
        {/* <div style={{padding: 20}}>
          <img src={img} alt="img" />
        </div>
        <div>{exercises.img}</div> */}
        <Typography
          variant="subheading"
          style={{ marginTop: -20, padding: 20, whiteSpace: "pre-line" }}
        >
          {description}
        </Typography>
        <div style={{ padding: 10 }} />
        {/* </Paper> */}
        {/* </Grid>
      <Grid item sm> */}
        {/* <Paper style={{height: 600}}> */}
        {/* </div> */}
        <Grid
          item
          sm
          style={{
            marginTop: -20,
            padding: 20,
            height: 300,
            overflowY: "auto"
          }}
        >
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
        {/* </Paper> */}
      </Paper>
      {/* </Grid> */}
    </Grid>
    <Grid item sm={9} style={{ height: 300 }}>
      <Paper
        boxShadow={0}
        style={{ height: 563, padding: 20, backgroundColor: "#EFEFEF" }}
      >
        <Typography variant="title" style={{ whiteSpace: "pre-line" }}>
          {title}
        </Typography>
        <Typography
          variant="subheading"
          style={{ marginTop: 20, whiteSpace: "pre-line" }}
        >
          {/* {description} <br />
          {hours} <br /> */}
          <Button
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScbvLtTiX53tSWpuVJhdyzwHbQuoX-J6n4Qiad2agzEZXUy_w/viewform"
          >
            reserve room
          </Button>
          <Button target="_blank" href={link}>
            View Calender
          </Button>
          <Button
            target="_blank"
            href="https://www.youtube.com/watch?v=U9446_aGlvE"
          >
            Live Feed
          </Button>
        </Typography>
      </Paper>
    </Grid>

    <Grid
      item
      sm
      style={{ marginTop: -20, padding: 20, height: 300, overflowY: "auto" }}
    >
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
    {/* <Grid item xs={4}>
      <Paper>this is working</Paper>
    </Grid> */}
    {/* <Grid item xs={4}>
      <Paper>this is working</Paper>
    </Grid> */}
  </Grid>
);
