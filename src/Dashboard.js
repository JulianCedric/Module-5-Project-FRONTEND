import React from 'react';
import HabitsContainer from './HabitsContainer';
import CreateHabit from './CreateHabit';
import Spacing from './Spacing';
import ProgressBarsContainer from './ProgressBarsContainer';
import EditModal from './EditHabit';
import Reminder from './Reminder';
// import ReactCalendar from './ReactCalendar';
import Menu from './Menu';
import $ from 'jquery';
import TodoApp from './TodoApp';
import './App.css';
// import HabitsManagementDashboard from './MenuExampleSecondaryPointing';
import MenuExampleSecondaryPointing from './MenuExampleSecondaryPointing';
import PopupExampleFlowing from './PopupExampleFlowing';


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
    id: 1,
    user_id: 1,
    name: '', 
    description: 'Write 1 new thing I learned today in my journal before bedtime',
    dateCreated: date,
    column: 'A',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 20,
        percentage: 33.33,
        dailyWinConfirmation: false
    }
},
{
    id: 2,
    user_id: 1,
    name: '', 
    description: 'Practice piano for at least 20 minutes',
    dateCreated: '',
    column: 'A',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 7,
        percentage: 33.33,
        dailyWinConfirmation: false
    }
},{
    id: 3,
    user_id: 1,
    name: '', 
    description: 'Read at least 3 pages of a fiction novel',
    dateCreated: '',
    column: 'A',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 7,
        percentage: 33.33,
        dailyWinConfirmation: false
    }
},
{
    id: 4,
    user_id: 1,
    name: '', 
    description: 'Do 10 push-ups before breakfast',
    dateCreated: '',
    column: 'A',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 7,
        percentage: 33.33,
        dailyWinConfirmation: false
    }
},
{
    id: 5,
    user_id: 1,
    name: '', 
    description: 'Drink 1 more glass of water today',
    dateCreated: '',
    column: 'B',
    progress: {
        counter: 7,
        percentage: 33.33,
        dailyWinConfirmation: false
    },
},
{
    id: 6,
    user_id: 1,
    name: '', 
    description: 'Water plants in my room!',
    dateCreated: '',
    column: 'B',
    progress: {
        counter: 20,
        percentage: 90.00,
        dailyWinConfirmation: false
    },
},
{
    id: 7,
    user_id: 1,
    name: '', 
    description: 'Make bed before morning jog',
    dateCreated: '',
    column: 'C',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 7,
        percentage: 33.33,
        dailyWinConfirmation: false
    }
},
{
    id: 8,
    user_id: 1,
    name: '', 
    description: 'Prep gym clothes next to bed the night before a work-out day',
    dateCreated: '',
    column: 'C',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 7,
        percentage: 33.33,
        dailyWinConfirmation: false
    }
},
{
    id: 9,
    user_id: 1,
    name: '', 
    description: 'Study / Practice Algorithms & Data Structures for at least an hour',
    dateCreated: '',
    column: 'C',
    counter: '',
    percentage: '',
    dailyWinConfirmation: '',
    progress: {
        counter: 7,
        percentage: 33.33,
        dailyWinConfirmation: false
    }
}
]

const API_USERS = 'http://localhost:3001/api/v1/users'
const API_HABITS = 'http://localhost:3001/api/v1/habits'
const API_REMINDERS = 'http://localhost:3001/api/v1/reminders'

class Dashboard extends React.Component {
    state = {  
        habits: HABITS2,
        stickifiedHabits: [],
        currentDate: date,
        showEditModal: false,
        time: 24,
        showReminder: false,
        remindedHabit: {}
    }

    componentDidMount = () => {
        fetch(API_HABITS)
        .then(r => r.json())
        .then(habitsObjects => this.setState({habits: habitsObjects}), () => console.log(this.state.habits))
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
                let newCount = 0

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
    console.log(id)
    console.log(progress)

    let copiedHabitsArray = [...this.state.habits]
    let copiedHabitObject = copiedHabitsArray.find(habit => habit.id === id)
    let newCount = progress.counter + 1

    console.log(newCount)

    this.setState(prevState => ({
        habits: prevState.habits.map(eachItem => {
            if( eachItem === copiedHabitObject ){
                if( newCount === 21 ){
                    return { ...eachItem, progress: { ...eachItem.progress, counter: newCount }, column: 'C' }
                } else {
                    return { ...eachItem, progress: { ...eachItem.progress, counter: newCount }}
                }
            } else {
                return eachItem
            }
        })
    }), ()=>{ console.log( this.state.habits[0])})


    }

        // if( count === 21 ){
        //     this.setState(prevState => ({
        //         habits: prevState.habits.map( habit => 
        //             habit === [...this.state.habits].find(hab => hab.id === id )
        //             ? { ...habit, column: "C" }
        //             : null
        //         )
        //     }), ()=>{ console.log( this.state.habits[0].column )})
        // }


        // // this.setState({remindedHabit: })

        // console.log("ID of remindedHabit object being submitted", id)
        // console.log([...this.state.habits])



        // console.log( copiedHabitObject.id )
        // this.setState(prevState => ({
            
        // }));
            

    // }

        


    handleNewHabit = newHabit => {
        console.log("POST ---", "Description of newly-created habit object:", newHabit.description)
        let newArr = [...this.state.habits, newHabit]
        this.setState({habits: newArr})        
    }

    // handleStickify = (id, stickify) => {
    //     fetch(API_HABITS_inProgress, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify({
    //             stickify: !stickify 
    //         })
    //     })
    //     .then(r => r.json())
    //     .then(updatedHabitObject => {
    //         let updatedHabitsArr = this.state.habits.map(habit => {
    //             if (habit.id === id) {
    //                 return updatedHabitObject
    //             }
    //             return habit
    //         })
    //     })
    // }

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

    // handleDelete = id => {
    //     fetch(API_HABITS_inProgress, { 
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //       }
    //     })
    //         .then(r => r.json())
    //         .then(() => {
    //             let newArr = this.state.habits.filter(habit => habit.id !== id)
    //             this.setState({habits: newArr})
    //         })
    // }

    handleDelete = id => {
        console.log("DELETE ---", "ID of habit object being deleted:", id)

        let newArr = this.state.habits.filter(habit => habit.id !== id)
        this.setState({habits: newArr})
    }

    onFFClick = id => {
        let updatedHabitObject = this.state.habits.find(habit => habit.id === id)
        this.setState({showReminder: !this.state.showReminder})
        this.setState({remindedHabit: updatedHabitObject})
    }

    modalClick = () => {
        $('.ui.basic.modal').modal('show');
    }

    render() { 
        console.log(this.state.habits)

        // this.setState(prevState => {
        //     habits: {
        //         ...prevState.habits,
        //         progress: {
        //             ...prevState.progress,
        //             counter: 2
        //         }
        //     }
        // })

        console.log(this.state.habits)
        return (  

            <div className="dashboard">
            <p></p>
            <br></br>
            <h2 className="mediumWhiteText" >Habits Management Dashboard</h2>

            <MenuExampleSecondaryPointing habits={ this.state.habits } />
            {/* <HabitsManagementDashboard habits={this.state.habits} currentDate={this.state.currentDate} handleStickify={this.handleStickify} handleEdit={this.handleEdit} handleDelete={this.handleDelete} /> */}
                <Spacing />



            <div className="ui basic modal">Modal</div>
            {/* <button onClick={ this.modalClick }>Modal</button> */}
            










                <Spacing />
            
            
            
        

            <TodoApp initItems={todoItems}/>
            
            
            
            
                <Spacing />










            <CreateHabit handleNewHabit={this.handleNewHabit} />
                <Spacing />
            <HabitsContainer habits={this.state.habits} currentDate={this.state.currentDate} handleStickify={this.handleStickify} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                <Spacing />
            {this.state.showEditModal
            ? 
            <>
                <EditModal />
                <Spacing />
            </>
            : null
            }
            <ProgressBarsContainer habits={this.state.habits} onFFClick={this.onFFClick} startTimer={this.timer} stickifiedHabits={this.state.stickifiedHabits}/>
            {this.state.showReminder
            ? <Reminder habits={this.state.habits} remindedHabit={this.state.remindedHabit} handleProgressCounter={this.handleProgressCounter}/> 
            : null}
                <Spacing />
            {/* <ReactCalendar /> */}
            <Spacing />
            <Menu habits={this.state.habits}/>
                <Spacing />
                <PopupExampleFlowing/>
                <Spacing />
        </div>
        );
    }
}
 
export default Dashboard;