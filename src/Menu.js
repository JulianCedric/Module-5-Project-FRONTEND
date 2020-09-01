import React from 'react';  
import MenuItem from './MenuItem';

class Menu extends React.Component {
    state = { 
        colA: [],
        colB: [],
        colC: [],
        items: []
     }

     componentDidMount = () => {
        this.props.habits.map( habit => {
            if( habit.column === 'A' ){
                this.setState({ colA: this.state.colA.push( habit.description ) })
            } else if( habit.column === 'B' ){
                this.setState({ colB: this.state.colB.push( habit.description ) })
            } else if( habit.column === 'C' ){
                this.setState({ colC: this.state.colC.push( habit.description ) })
            }
        })
        this.saveItems();
     }

     saveCols = () => {
        
     }

     saveItems = () => {
        for( let i=0; i<10; i++ ){
            this.state.items.push(
                <tr>
                    <td>{ this.state.colA[i] }</td>
                    <td>{ this.state.colB[i] }</td>
                    <td>{ this.state.colC[i] }</td>
                </tr>
            )
        }
     }

    render() { 
        console.log("Menu", this.state.colA )

        return (  
            <table className="ui inverted celled structured table">
                <thead style={{ textAlign: 'center' }}>

                    <tr>
                        <th style={{ width: '33vw' }}>Bucket List</th>
                        <th style={{ width: '33vw' }}>In-Progress...</th>
                        <th style={{ width: '33vw' }}>STIKified</th>

                    </tr>
                </thead>
                
                <tbody>
                    { this.state.items }
                </tbody>
            </table>
        )
    }
}

export default Menu;

 
{/* export default Menu;


<script type="text/javascript">
$(document)
  .ready(function(){
    $('.demo .example .menu a.item')
.on('click', function() {
  if(!$(this).hasClass('dropdown')) {
    $(this)
      .addClass('active')
      .closest('.ui.menu')
      .find('.item')
        .not($(this))
        .removeClass('active')
    ;
  }
})
    ;
  })
;
</script> */}