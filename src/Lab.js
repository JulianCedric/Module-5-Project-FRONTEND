import React from 'react';
import './App.css';
import CreateHabit from './CreateHabit';
import HabitsContainer from './HabitsContainer';
import ProgressBarsContainer from './ProgressBarsContainer';
import { DatePicker, RangePicker, theme } from 'react-trip-date';
import Datetime from 'react-datetime';

const API_USERS = 'http://localhost:3001/api/v1/users'
const API_HABITS = 'http://localhost:3001/api/v1/habits'
const API_REMINDERS = 'http://localhost:3001/api/v1/reminders'

const today = new Date()
const date = (today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())

class Lab extends React.Component {
    state = {  
        users: [],
        habits: [],
        reminders: []
    }

    componentDidMount = () => {
        fetch(API_USERS)
        .then(r => r.json())
        .then(usersData => this.setState({ users: usersData }))

        fetch(API_HABITS)
        .then(r => r.json())
        .then(habitsData => this.setState({ habits: habitsData }))

        fetch(API_REMINDERS)
        .then(r => r.json())
        .then(remindersData => this.setState({ reminders: remindersData }))
      }

    handleNewHabit = newHabit => {
        console.log("newHabit: ", newHabit)
        fetch(API_HABITS) 
        .then(r => r.json())
        .then(habitsData => this.setState({ habits: habitsData }))
        // this.created_at()
    }

    // created_at = () => {
    //     const newestHabit = this.state.habits.pop()
    //     const c_at_newestHabit = newestHabit.created_at
    //     let arr = []
    //     for (let i = 0; i<10; i++) {
    //         arr.push(c_at_newestHabit[i])
    //     } 
    //     console.log(arr.join(""))
    //     return arr.join("")
    // }

    handleDelete = id => {
        fetch(`http://localhost:3001/api/v1/habits/${id}`, { 
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
        })
        .then(() => {
            let newArr = this.state.habits.filter(habit => habit.id !== id)
            this.setState({habits: newArr})
        })
    }

    render() { 
        // console.log("Date", date)
        // console.log("Users from DB:", this.state.users)
        // console.log("Habits from DB:", this.state.habits)
        // console.log("Reminders from DB:", this.state.reminders)
        // console.log("created_at: ", this.created_at())
        return (  
            <div>
                <div className="ui centered grid">
                    <div className="twelve wide column">
                        <div className="dashboard">
                            <br/>
                                <h1 className="mediumWhiteText">Habits Management Dashboard</h1>
                            <br/>
                                <CreateHabit handleNewHabit={this.handleNewHabit} date={date}/>
                            <br/>
                            <br/>
                                <HabitsContainer habits={ this.state.habits } editHabit={ this.editHabit } startStikify={ this.startStikify } handleDelete={this.handleDelete}/>
                            <br/>
                            <br/>
                                <ProgressBarsContainer habits={this.state.habits} onFFClick={this.onFFClick} startTimer={this.timer} stickifiedHabits={this.state.stickifiedHabits} date={date} created_at={this.created_at}/>
                            <br/>
                            <br/>
                                {/* <DatePicker/> */}
                                <h4>Datetime: </h4>
                                <br/>
                                <Datetime />
                                <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Lab;

// git@github.com:JulianCedric/Module-5-Project-FRONTEND.git

// https://reactjsexample.com/a-date-range-picker-for-reactjs/