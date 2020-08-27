// import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';
import HabitsContainer from './HabitsContainer';
import CreateHabitForm from './CreateHabitForm';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
const HABITS = [
    {
      id: 1,
      description: 'breakfast',
      type: 'good',
      stickify: false,
      created: '2020-08-24',
      tag: 'health'
    },
    {
      id: 2,
      description: 'lunch',
      type: 'good',
      stickify: false,
      created: '2020-08-25',
      tag: 'health'
    },
    {
      id: 3,
      description: 'dinner',
      type: 'good',
      stickify: false,
      created: '2020-08-26',
      tag: 'health'
    }
  ]

class Home extends React.Component {
    state = {  
        habits: HABITS,
        currentDate: date
    }

    handleNewHabit =  newHabit => {
        let newArray = [...this.state.habits, newHabit]
        this.setState({habits: newArray})        
    }

    render() { 
        console.log(this.state.habits)
        console.log(this.state.currentDate)
        return (  
            <div className="home">
                <h2>Home</h2>
                <CreateHabitForm handleNewHabit={this.handleNewHabit} />
                <HabitsContainer habits={this.state.habits} currentDate={this.state.currentDate} />
            </div>
        );
    }
}
 
export default Home;