import React from 'react';
import './App.css';
import { Dimmer, Card, Segment } from 'semantic-ui-react';
import HabitsContainer from './HabitsContainer';
import ProgressBarsContainer from './ProgressBarsContainer';
import CreateHabit from './CreateHabit';
import ReminderItem from './ReminderItem';
import { v4 as uuidv4 } from 'uuid';

const API_USERS = 'http://localhost:3001/api/v1/users'
const API_HABITS = 'http://localhost:3001/api/v1/habits'
const API_REMINDERS = 'http://localhost:3001/api/v1/reminders'

const HABITS = ['a','b','c']

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

class Dashboard extends React.Component {
    state = {
        users: [],
        // habits: [],
        habits: HABITS,
        reminders: [],
        stickifiedHabits: [],
        currentDate: date,
        showEditModal: false,
        time: 24,
        showReminder: false,
        congrats: {
            show: false,
            habit: ''
        },
        remindedHabit: {}
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

    timeout = 0
    timer = (id, progress) => {
        this.timeout = setInterval(()=>{
            if( this.state.time > 0 ){
                this.setState({ time: this.state.time -= 1 })
                if( this.state.time === 12 ){
                    this.onFFClick( id )
                }
            } else {
                this.stopTimer();
                this.setState({ showReminder: false });
                alert("Alert: Your progress for this habit has been reset back to Day 1");

                let copiedHabitsArray = [...this.state.habits]
                let copiedHabitObject = copiedHabitsArray.find(habit => habit.id === id)
                let newCount = 1

                console.log(newCount)

                this.setState(prevState => ({
                    habits: prevState.habits.map(eachItem =>
                        eachItem === copiedHabitObject
                        ? { ...eachItem, progress: { ...eachItem.progress, counter: newCount } }
                        : eachItem
                        )
                }))
            }
            console.log( this.state.time );
        },1000);
    }

    stopTimer = () => {
        clearInterval( this.timeout );
    }

    handleProgressCounter = (id, progress) => {
    let copiedHabitsArray = [...this.state.habits]
    let copiedHabitObject = copiedHabitsArray.find(habit => habit.id === id) 
    let newCount = progress.counter + 1

    this.setState(prevState => ({
        habits: prevState.habits.map(eachItem => {
            if( eachItem === copiedHabitObject ){
                if( newCount === 21 ){
                    this.setState({ congrats: { show: true, habit: eachItem.description } });
                }
                return { ...eachItem, progress: { ...eachItem.progress, counter: newCount }}
            } else {
                return eachItem
            }
        })
        }), ()=>{ this.closeReminder() })
    }

    closeCongrats = () => {
        this.setState({ congrats: { show: false, habit: '' }})
    }

    closeReminder = () => {
        this.setState({ showReminder: false });
    }

    handleNewHabit = newHabit => {
        console.log("POST ---", "Description of newly-created habit object:", newHabit.description)
        fetch(API_HABITS)
        .then(r => r.json())
        .then(habitsData => this.setState({ habits: habitsData }))
    }

    handleStickify = id => {
        console.log("PATCH ---", "ID of habit object being stickified:", id)
        let updatedHabitObject = this.state.habits.find(habit => habit.id === id)
        let updatedStickifiedHabitsArr = [...this.state.stickifiedHabits, updatedHabitObject]
        this.setState({stickifiedHabits: updatedStickifiedHabitsArr})
        this.timer();
    }

    handleEdit = (id, description) => {
        console.log("PATCH ---", "ID of habit object being edited:", id, "Pre-Edit Description of habit object being edited:", description)

        let updatedHabitObject = this.state.habits.find(habit => habit.id === id)

        let updatedHabitsArr = this.state.habits.map(habit => {
            if (habit.id === id) {
                return updatedHabitObject
            }
            return habit
        })
        this.setState({showEditModal: !this.state.showEditModal})
        this.setState({habits: updatedHabitsArr})
    }

    handleDelete = id => {
        console.log("DELETE ---", "ID of habit object being deleted:", id)
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

    onFFClick = id => {
        let updatedHabitObject = this.state.habits.find(habit => habit.id === id)
        this.setState({showReminder: true, remindedHabit: updatedHabitObject})
    }

    editHabit = ( id, data ) => {
      let copiedHabitsArray = [...this.state.habits]
      let copiedHabitObject = copiedHabitsArray.find(habit => habit.id === id)

      this.setState(prevState => ({
          habits: prevState.habits.map(eachItem => {
              if( eachItem === copiedHabitObject ){
                  return { ...eachItem, description: data }
              } else {
                  return eachItem
              }
          })
      }))
    }

    startStikify = ( id ) => {
      let copiedHabitsArray = [...this.state.habits]
      let copiedHabitObject = copiedHabitsArray.find(habit => habit.id === id)

      this.setState(prevState => ({
          habits: prevState.habits.map(eachItem => {
              let newCount = eachItem.progress.counter + 1;
              if( eachItem === copiedHabitObject ){
                  return { ...eachItem, progress: { ...eachItem.progress, counter: newCount }}
              } else {
                  return eachItem
              }
          })
      }))
    }

    addReminder = newReminder => {
        console.log("POST ---", "ID of newly-created reminder object:", newReminder.id)
    }





















    render() {
        console.log("Users from DB:", this.state.users)
        console.log("Habits from DB:", this.state.habits)
        console.log("Reminders from DB:", this.state.reminders)
        return (
            <div className="ui centered grid">
                <div className="twelve wide column">
                    <div className="dashboard">
                        <br></br>
                    <h1 className="mediumWhiteText">Habits Management Dashboard</h1>
                        <br></br>
                    <CreateHabit handleNewHabit={this.handleNewHabit} />
                        <br></br>
                        <br></br>
                    <HabitsContainer habits={ this.state.habits } editHabit={ this.editHabit } startStikify={ this.startStikify } handleDelete={this.handleDelete} />
            {
                this.state.congrats.show
                ? <Dimmer active>
                        <Segment inverted>
                            <Card inverted fluid color="purple">
                                <Card.Content inverted textAlign="center">
                                    <Card.Header>Congrats! You have Stickify'd your new habit!</Card.Header>
                                    <p>{ this.state.congrats.habit }</p>
                                    <button class="ui small inverted green button" onClick={ this.closeCongrats }>Okay</button>
                                </Card.Content>
                            </Card>
                    </Segment></Dimmer>
                : null
            }

            {
              this.state.showReminder
              ? <Dimmer active><Segment inverted><ReminderItem habits={this.state.habits} remindedHabit={this.state.remindedHabit} handleProgressCounter={this.handleProgressCounter}/></Segment></Dimmer>
              : null
            }
            <Segment><h3>Hey, Brendon! You have { this.state.time } hours to re-type your latest 'In Progress' habit.</h3></Segment>
            <ProgressBarsContainer habits={this.state.habits} onFFClick={this.onFFClick} startTimer={this.timer} stickifiedHabits={this.state.stickifiedHabits}/>



        </div></div></div>
        )
    };
};

export default Dashboard;
