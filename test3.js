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

//
rails g scaffold User firstName:string lastName:string email:string username:string password:string 
//
rails g scaffold Reminder habit_id:integer duration:integer startDate:integer endDate:integer inProgress:boolean stickifyd:boolean 
//
rails g scaffold Habit user_id:integer name:string description:string quote:string dateCreated:integer column:string counter:integer percentage:integer dailyWinConfirmation:boolean
