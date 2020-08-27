// import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';
import HabitsContainer from './HabitsContainer';
import CreateHabitForm from './CreateHabitForm';
import Spacing from './Spacing';
import ProgressBarsContainer from './ProgressBarsContainer';
import EditModal from './EditModel';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
const HABITS = [
    {
      id: 1,
      description: 'breakfast',
      type: 'good',
      stickify: false,
      created: '2020-8-24',
      tag: 'health'
    },
    {
      id: 2,
      description: 'lunch',
      type: 'good',
      stickify: false,
      created: '2020-8-25',
      tag: 'health'
    },
    {
      id: 3,
      description: 'dinner',
      type: 'good',
      stickify: false,
      created: '2020-8-26',
      tag: 'health'
    }
  ]

class Home extends React.Component {
    state = {  
        habits: HABITS,
        currentDate: date,
        showEditModal: true
    }

    handleNewHabit = newHabit => {
        console.log("Description of new habit:", newHabit.description)
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

        let updatedHabitsArr = this.state.habits.map(habit => {
            if (habit.id === id) {
                return updatedHabitObject
            }
            return habit
        })
        this.setState({habits: updatedHabitsArr})
    }

    handleShowEditModal = () => {
        this.setState({showEditModal: !this.state.showEditModal})
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

    render() { 
        // console.log(this.state.habits)
        // console.log(this.state.currentDate)
        return (  
            <div className="home">
                <p></p>
                <br></br>
                <h2>Home</h2>
                <CreateHabitForm handleNewHabit={this.handleNewHabit} />
                    <Spacing />
                <HabitsContainer habits={this.state.habits} currentDate={this.state.currentDate} handleStickify={this.handleStickify} handleShowEditModal={this.handleShowEditModal} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                    <Spacing />
                {this.state.showEditModal
                ? 
                <>
                    <EditModal />
                    <Spacing />
                </>
                : null
                }
                <ProgressBarsContainer />
                    <Spacing />
                    <Spacing />
            </div>
        );
    }
}
 
export default Home;