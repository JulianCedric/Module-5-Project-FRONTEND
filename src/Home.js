import React from 'react';
import HabitsContainer from './HabitsContainer';

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
        habits: HABITS
    }

    render() { 
        console.log(this.state.habits)
        return (  
            <div className="home">
                <h2>Home</h2>
                <HabitsContainer habits={this.state.habits} />
            </div>
        );
    }
}
 
export default Home;