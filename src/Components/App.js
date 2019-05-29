import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { areasBuildings, exercises } from "../store.js";

export default class extends Component {
  state = {
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
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />
      </Fragment>
    );
  }
}
