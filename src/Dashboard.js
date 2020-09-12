import React from 'react';
import './App.css';
import { Dimmer, Card, Segment } from 'semantic-ui-react';
import MenuExampleSecondaryPointing from './MenuExampleSecondaryPointing';
import ProgressBarsContainer from './ProgressBarsContainer';
import CreateHabit from './CreateHabit';
import Reminder from './Reminder';
import { v4 as uuidv4 } from 'uuid';
import TestingArea from './TestingArea';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
const HABITS2 = [
{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Write 1 new thing I learned today in my journal before bedtime',
    quote: "'Practice isn't the thing you do once you're good. It's the thing you do that makes you good.' -Malcolm Gladwell",
    dateCreated: date,
    column: 'A',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 0,
        percentage: 0,
        dailyWinConfirmation: false
    }
},
{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Practice piano for at least 20 minutes',
    quote: "'Successful people are simply those with successful habits.' -Brian Tracy", 
    dateCreated: '',
    column: 'A',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 0,
        percentage: 0,
        dailyWinConfirmation: false
    }
},{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Read at least 3 pages of a fiction novel',
    quote: "'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.' -Albert Einstein",
    dateCreated: '',
    column: 'A',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 0,
        percentage: 0,
        dailyWinConfirmation: false
    }
},
{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Do 10 push-ups before breakfast',
    quote: "'Winning is not a sometime thing; it’s an all-time thing. You don’t win once in a while, you don’t do things right once in a while, you do them right all the time. Winning is a habit. Unfortunately, so is losing.' -Vince Lombardi",
    dateCreated: '',
    column: 'A',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 0,
        percentage: 0,
        dailyWinConfirmation: false
    }
},
{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Water plants in my room!',
    quote: "'Drop by drop is the water pot filled.' -BUDDHA",
    dateCreated: '',
    column: 'B',
    progress: {
        counter: 20,
        percentage: 90.00,
        dailyWinConfirmation: false
    },
},
{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Drink 1 more glass of water today',
    quote: "'I fear not the man who has practiced 10,000 kicks, but I do fear the man who has practiced one kick 10,000 times.' -BRUCE LEE",
    dateCreated: '',
    column: 'B',
    progress: {
        counter: 7,
        percentage: 33.33,
        dailyWinConfirmation: false
    },
},
{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Make bed before morning jog',
    quote: "'The chains of habit are too weak to be felt until they are too strong to be broken.'   --Samuel Johnson",
    dateCreated: '',
    column: 'C',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 21,
        percentage: 100,
        dailyWinConfirmation: false
    }
},
{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Prep gym clothes next to bed the night before a work-out day',
    quote: "'Let today be the day you give up who you've been for who you can become.' -Hal Elrod",
    dateCreated: '',
    column: 'C',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 21,
        percentage: 100,
        dailyWinConfirmation: false
    }
},
{
    id: uuidv4(),
    user_id: 1,
    name: '',
    description: 'Study / Practice Algorithms & Data Structures for at least an hour',
    quote: "'It's not what we do once in a while that shapes our lives, but what we do consistently.' -Tony Robbins",
    dateCreated: '',
    column: 'C',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 21,
        percentage: 100,
        dailyWinConfirmation: false
    }
}
]
const USER = {
    name: "Brendon"
}

const API_USERS = 'http://localhost:3001/api/v1/users'
const API_HABITS = 'http://localhost:3001/api/v1/habits'
const API_REMINDERS = 'http://localhost:3001/api/v1/reminders'

class Dashboard extends React.Component {
    state = {
        user: USER,
        habits: [],
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
      }
      
      componentDidMount = () => {
        fetch(API_HABITS)
        .then(r => r.json())
        .then(habitsData => this.setState({ habits: habitsData }))
      }
    
      componentDidMount = () => {
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
        let newArr = [...this.state.habits, newHabit]
        this.setState({habits: newArr})
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

        let newArr = this.state.habits.filter(habit => habit.id !== id)
        this.setState({habits: newArr})
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

    deleteHabit = ( id ) => {
      let copiedHabitsArray = [...this.state.habits]
      let copiedHabitObject = copiedHabitsArray.filter(habit => habit.id !== id)

      this.setState({
        habits: copiedHabitObject
      })
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

    render() {
        // console.log(this.state.users)
        // console.log(this.state.habits)
        console.log(this.state.reminders)
        return (
            <div className="ui centered grid">
            <div className="twelve wide column">
        <div className="dashboard">
            <p></p>


            <h1 className="mediumWhiteText" >Habits Management Dashboard</h1>


            <p></p><br></br>


            <CreateHabit handleNewHabit={this.handleNewHabit} />

            <p></p><br></br>
            {/* <hr /> */}

            <MenuExampleSecondaryPointing habits={ this.state.habits } editHabit={ this.editHabit } startStikify={ this.startStikify } deleteHabit={ this.deleteHabit } />
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
              ? <Dimmer active><Segment inverted><Reminder habits={this.state.habits} remindedHabit={this.state.remindedHabit} handleProgressCounter={this.handleProgressCounter}/></Segment></Dimmer>
              : null
            }
            <Segment><h3>Hey, { USER.name }! You have { this.state.time } hours to re-type your latest 'In Progress' habit.</h3></Segment>
            <ProgressBarsContainer habits={this.state.habits} onFFClick={this.onFFClick} startTimer={this.timer} stickifiedHabits={this.state.stickifiedHabits}/>

            <TestingArea reminders={this.state.reminders}/>
        </div>
        </div>
        </div>
        );
    };
};

export default Dashboard;
