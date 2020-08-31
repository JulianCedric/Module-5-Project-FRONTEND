import React, { Component } from 'react';
import { render } from 'react-dom';
import HabitsContainer from './HabitsContainer';
import CreateHabitForm from './CreateHabitForm';
import Spacing from './Spacing';
import ProgressBarsContainer from './ProgressBarsContainer';
import EditModal from './EditModel';
import ProjectManagement from './ProjectManagement';
import Login from './Login';
import Reminder from './Reminder';

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

const API_HABITS = 'http://localhost:3001/api/v1/habits'

class Dashboard extends React.Component {
    state = {  
        habits: HABITS,
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
        habits: prevState.habits.map(eachItem => 
            eachItem === copiedHabitObject
            ? { ...eachItem, progress: { ...eachItem.progress, counter: newCount } }
            : eachItem
            )
    }))



    }

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

        // console.log(this.state.habits)
        return (  
            <div className="dashboard">
            <p></p>
            <br></br>
            <h2 className="mediumWhiteText" >Dashboard</h2>
            <CreateHabitForm handleNewHabit={this.handleNewHabit} />
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
            {/* <ProjectManagement /> */}
                <Spacing />
                <Spacing />
        </div>
        );
    }
}
 
export default Dashboard;