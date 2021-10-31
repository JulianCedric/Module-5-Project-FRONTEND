// 2021.10.31 - Updated

// import React from 'react';
// import { useTimer } from 'react-timer-hook';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import Dashboard from './Dashboard';

// function Timer({ expiryTimestamp }) {
//   const {
//     seconds,
//     minutes,
//     hours,
//     days,
//     isRunning,
//     start,
//     pause,
//     resume,
//     restart,
//   } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
//   const percentage = 77;
//   return (
//     <div className='my-timer'>
//       <div style={{ width: 200, height: 200 }}>
//         <CircularProgressbar
//           value={percentage}
//           text={`${percentage}%`}
//           background
//           backgroundPadding={6}
//           styles={buildStyles({
//           backgroundColor: "cornflowerblue",
//           textColor: "#fff",
//           pathColor: "#fff",
//           trailColor: "transparent",
//           width: '200px'
//           })}
//         />
//       </div>
//       <h1>React-timer-hook </h1>
//       <p>Timer Demo</p>
//       <div style={{fontSize: '100px'}}>
//         <span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//       <p>{isRunning ? 'Running' : 'Not running'}</p>
//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={resume}>Resume</button>
//       <button onClick={() => {
//         // Resets back to 30-minute timer
//         const time = new Date();
//         time.setSeconds(time.getSeconds() + 1800);
//         restart(time)
//       }}>Reset</button>
//     </div>
//   );
// }

// export default function App() {
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + 1800); // Starts with timer set to 30 minutes
//   return (
//     <div className='main'>
//       <h1>Deep Work Dashboard</h1>
//       <p>Circular Progress Bar - UNDER CONSTRUCTION</p>
//       <Timer expiryTimestamp={time} />

//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       <Dashboard />

//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>

//     </div>
//   );
// }

// /* 
// 2021.10.12: 

//  - There are two different timers - the one we'll be using is 'Timer'. 
//  - We store each type of user input—(a) work minutes and (b) break minutes—into the following variables: 
//     - optionsWork
//     - optionsBreak
// */