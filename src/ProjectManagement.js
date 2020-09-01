import React from 'react';

class ProjectManagement extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="ui left aligned segment">
                <h2>Project Management Space: </h2>
                <p><input type="checkbox" tabindex="0" class="hidden"/> ProgressBarsContainer --> ProgressBar</p>
                <p>*NOTE: wrt progress bar / reminders functionality: When a user 'Stickifies' a Habit--from the HabitsContainer--a reminder system is initiated in which the user will be notified at a specific time each day for a 21-day period. Each daily reminder will include an option to simply click "-" or "+". Clicking the minus icon restarts the progress bar--progress attribute, integer value--back at zero, while clicking the plus icon increments the daily counter--which starts on the date a habit is stickied--by one. *** Other Notes: Max of 3 habits per any 21-day period?? --- Clear / reset list of habits on a weekly basis?? ***</p>
            </div>
        );
    }
}
 
export default ProjectManagement;

// https://codepen.io/marekdano/pen/bVNYpq