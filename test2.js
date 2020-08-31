



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
const HABITS2 =











// //////////

// create_table "habits", force: :cascade do |t|
//     t.integer "user_id"
//     t.string "type"
//     t.string "name"
//     t.string "description"
//     t.integer "dateCreated"
//     t.integer "progress"
//     t.integer "counter"
//     t.integer "percentage"
//     t.boolean "dailyWinConfirmation"
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at", precision: 6, null: false
    
















<div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg">
      <div class="header">
        Elliot Fu
      </div>
      <div class="meta">
        Friends of Veronika
      </div>
      <div class="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg">
      <div class="header">
        Jenny Hess
      </div>
      <div class="meta">
        New Member
      </div>
      <div class="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>