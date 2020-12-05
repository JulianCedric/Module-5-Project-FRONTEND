// 2020.12.04 - FRI - CRUD PRACTICE:    

// USER ACTION:         ELEMENT:                    EVENT:                                                          CALLBACK ACTION:

// CREATE:                   
//                      FORM INPUT FIELD & BUTTON   ONCLICK                                                         NEWLY-CREATED DATA RENDERED ONTO DOM

// READ:                
//                      *COMPONENTDIDMOUNT*         *DATA AUTOMATICALLY RENDERED UPON PAGE LOAD*                    *DATA AUTOMATICALLY RENDERED ONTO DOM UPON PAGE LOAD*

// UPDATE:              
//                      BUTTON                      ONCLICK                                                         EDIT FORM & BUTTON RENDERED ONTO DOM    
//                      FORM INPUT FIELD & BUTTON   ONSUBMIT                                                        EDIT FORM & BUTTON HIDDEN FROM DOM -- AND -- UPDATED USER INPUT RENDERED ONTO DOM 

// DELETE:              
//                      BUTTON                      ONCLICK                                                         DATA DELETED FROM DATABASE 











    
































//














































# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Habit.destroy_all
Reminder.destroy_all

User.create(id: 1, firstName: 'Brendon', lastName: 'Clark', email: 'bclark@email.com', username: 'bclark', password: 'abc123')

Habit.create(
    user_id: 1,
    name: '',
    description: 'Write 1 new thing I learned today in my journal before bedtime',
    quote: "'Practice isn't the thing you do once you're good. It's the thing you do that makes you good.' -Malcolm Gladwell",
    dateCreated: '',
    column: 'A',
    counter: 0,
    percentage: 0,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Practice piano for at least 20 minutes',
    quote: "'Successful people are simply those with successful habits.' -Brian Tracy",
    dateCreated: '',
    column: 'A',
    counter: 0,
    percentage: 0,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Read at least 3 pages of a fiction novel',
    quote: "'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.' -Albert Einstein",
    dateCreated: '',
    column: 'A',
    counter: 0,
    percentage: 0,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Water plants in my room!',
    quote: "'Drop by drop is the water pot filled.' -BUDDHA",
    dateCreated: '',
    column: 'A',
    counter: 20,
    percentage: 90.00,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Drink 1 more glass of water today',
    quote: "'I fear not the man who has practiced 10,000 kicks, but I do fear the man who has practiced one kick 10,000 times.' -BRUCE LEE",
    dateCreated: '',
    column: 'A',
    counter: 7,
    percentage: 33.33,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Make bed before morning jog',
    quote: "'The chains of habit are too weak to be felt until they are too strong to be broken.'   --Samuel Johnson",
    dateCreated: '',
    column: 'C',
    counter: 21,
    percentage: 100,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Prep gym clothes next to bed the night before a work-out day',
    quote: "'Let today be the day you give up who you've been for who you can become.' -Hal Elrod",
    dateCreated: '',
    column: 'C',
    counter: 21,
    percentage: 100,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Study / Practice Algorithms & Data Structures for at least an hour',
    quote: "'It's not what we do once in a while that shapes our lives, but what we do consistently.' -Tony Robbins",
    dateCreated: '',
    column: 'C',
    counter: 21,
    percentage: 100,
    dailyWinConfirmation: false
)

Reminder.create(habit_id: 1, duration: 21, startDate: 2020-8-25, endDate: 2020-9-15, stickifyd: false)

# 