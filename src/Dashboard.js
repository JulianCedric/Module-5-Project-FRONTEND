import React from 'react';
// import HabitsContainer from './HabitsContainer';
import CreateHabit from './CreateHabit';
import Spacing from './Spacing';
import ProgressBarsContainer from './ProgressBarsContainer';
import EditModal from './EditHabit';
import Reminder from './Reminder';
// import ReactCalendar from './ReactCalendar';
import Menu from './Menu';
import TodoApp from './TodoApp';
import './App.css';
// import HabitsManagementDashboard from './MenuExampleSecondaryPointing';
import MenuExampleSecondaryPointing from './MenuExampleSecondaryPointing';
// import PopupExampleFlowing from './PopupExampleFlowing';
import ThemingLayout from './ThemingLayout';
import AnotherGridLayout from './AnotherGridLayout';
import { Sticky, Dimmer, Card, Segment } from 'semantic-ui-react';
import StickyLayout from './StickyLayout';
import Sticcc from './Sticcc';
import { v4 as uuidv4 } from 'uuid';

let todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
const HABITS = [
    {
      id: 1,
      description: 'medidate',
      type: 'good',
      stickify: false,
      created: '2020-8-24',
      tag: 'health',
      progress: {
          counter: 1,
          percentage: 4.76,
          dailyWinConfirmation: false
        //   User clicks submit on dailyReminderForm, which
            // (1) sets dailyWinConfirmation attribute to true, and
            // (2) increments habit.progress.counter by 1 [day]
      },
      dailyWin: ( time )=>{
        // if user clicks submit within day range, increment progress.counter, else progress.counter = 0
        // progress.percentage = progress.counter/21
      }
    },
    {
      id: 2,
      description: 'push-ups',
      type: 'good',
      stickify: false,
      created: '2020-8-25',
      tag: 'health',
      progress: {
        counter: 7,
        percentage: 33.33
    },
    dailyWin: ()=>{
      // if user clicks submit within day range, increment progress.counter, else progress.counter = 0
      // progress.percentage = progress.counter/21
    }
    },
    {
      id: 3,
      description: 'fast',
      type: 'good',
      stickify: false,
      created: '2020-8-26',
      tag: 'health',
      progress: {
        counter: 0,
        percentage: 0
    },
    dailyWin: ()=>{
      // if user clicks submit within day range, increment progress.counter, else progress.counter = 0
      // progress.percentage = progress.counter/21
    }
    }
  ]
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

// const API_USERS = 'http://localhost:3001/api/v1/users'
// const API_HABITS = 'http://localhost:3001/api/v1/habits'
// const API_REMINDERS = 'http://localhost:3001/api/v1/reminders'

class Dashboard extends React.Component {
    state = {
        habits: HABITS2,
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
        // fetch(API_HABITS)
        // .then(r => r.json())
        // .then(habitsObjects => this.setState({habits: habitsObjects}), () => console.log(this.state.habits))
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
                alert("Alert: Your progress for this habit has been reset back to Day 0");

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
        return (
            <div className="ui centered grid">
            <div className="twelve wide column">
        <div className="dashboard">
            <p></p>


            <h1 className="mediumWhiteText" >Habits Management Dashboard</h1>
            {/* <Sticcc /> */}

            <p></p><br></br>


            <CreateHabit handleNewHabit={this.handleNewHabit} />

            <p></p>
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
            {/* <Spacing/> */}
            {
              this.state.showReminder
              ? <Dimmer active><Segment inverted><Reminder habits={this.state.habits} remindedHabit={this.state.remindedHabit} handleProgressCounter={this.handleProgressCounter}/></Segment></Dimmer>
              : null
            }
            <Segment>{ this.state.time }</Segment>
            <ProgressBarsContainer habits={this.state.habits} onFFClick={this.onFFClick} startTimer={this.timer} stickifiedHabits={this.state.stickifiedHabits}/>
            <Spacing></Spacing>
            <Spacing/>
            {/* <PopupExampleFlowing/> */}
            {/* <ThemingLayout />  */}
            {/* <div><AnotherGridLayout /></div> */}

            <Spacing />
            {/* <StickyLayout /> */}
            {/* <Spacing/> */}
        </div>
        </div>
        </div>
        );
    }
}

export default Dashboard;
