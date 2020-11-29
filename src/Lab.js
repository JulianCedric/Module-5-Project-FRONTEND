import React from 'react';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';

class Lab extends React.Component {
    state = {  
        habits: ['a','b','c']
    }

    render() { 
        console.log(this.state.habits)
        return (  
            <div style={{color: 'white'}}>

                <br></br>
                <p>CRUD</p>
                <br></br>

                <br></br>
                <p>C</p>
                <br></br>

                <Create />

                <br></br>
                <p>R</p>
                <br></br>

                <Read />

                <br></br>
                <p>U</p>
                <br></br>

                <Update />

                <br></br>
                <p>D</p>
                <br></br>

                <Delete />

            </div>
        );
    }
}
 
export default Lab;