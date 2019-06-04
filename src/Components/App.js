import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { areasBuildings, exercises, atheltics } from "../store.js";

export default class extends Component {
  state = {
    atheltics,
    exercises,
    exercise: {}
  };

  getExercisesByareasBuildings() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { areasBuildings } = exercise;

        exercises[areasBuildings] = exercises[areasBuildings]
          ? [...exercises[areasBuildings], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleAthelticsSelected = id => {
    this.setState(({ atheltics }) => ({
      atheltics: atheltics.find(ex => ex.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByareasBuildings(),
      { category, exercise } = this.state;

    return (
      <Fragment>
        <Header />
        <Footer
          category={category}
          areasBuildings={areasBuildings}
          onSelect={this.handleCategorySelected}
        />

        <Exercises
          atheltics={atheltics}
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />
      </Fragment>
    );
  }
}
