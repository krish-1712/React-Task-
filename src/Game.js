// import React, { useState, useEffect } from 'react';
// import './Game.css';

// const Game = () => {
//   const keywords = ['HIT'];
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [currentKeyword, setCurrentKeyword] = useState('');
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     if (timeLeft === 0) {
//       setIsActive(false);
//       return;
//     }

//     let interval;
//     if (isActive) {
//       interval = setInterval(() => {
//         const randomIndex = Math.floor(Math.random() * 9);
//         setCurrentKeyword(keywords[randomIndex]);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isActive, timeLeft, keywords]);

//   useEffect(() => {
//     if (isActive) {
//       const timer = setTimeout(() => {
//         setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isActive, timeLeft]);

//   const handleClick = (keyword) => {
//     if (keyword === currentKeyword) {
//       setScore(prevScore => prevScore + 5);
//     } else {
//       setScore(prevScore => prevScore - 2.5);
//     }
//   };

//   const startGame = () => {
//     setIsActive(true);
//     setTimeLeft(60);
//     setScore(0);
//   };

//   return (
//     <div>
//       <div className="scoreboard">
//         <p className='score'>Score: {score}</p>
//         <p className='time'>Time left: {timeLeft}</p>
//       </div>
//       <div className="game-board">
//         {[...Array(9).keys()].map((box, index) => (
//           <div key={index} className="box" onClick={() => handleClick(keywords[index])}>
//             {currentKeyword === keywords[index] && <span className="keyword">{currentKeyword}</span>}
//           </div>
//         ))}
//       </div>
//       <button onClick={startGame} disabled={isActive} className='start'>Start Game</button>
//     </div>
//   );
// };

// export default Game;




// import React, { useState, useEffect } from 'react';
// import './Game.css';

// const Game = () => {
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [currentBoxIndex, setCurrentBoxIndex] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     if (timeLeft === 0) {
//       setIsActive(false);
//       return;
//     }

//     let interval;
//     if (isActive) {
//       interval = setInterval(() => {
//         setCurrentBoxIndex(prevIndex => (prevIndex + 1) % 9);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isActive, timeLeft]);

//   useEffect(() => {
//     if (isActive) {
//       const timer = setTimeout(() => {
//         setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isActive, timeLeft]);

//   const handleClick = (index) => {
//     if (index === currentBoxIndex) {
//       setScore(prevScore => prevScore + 5);
//     } else {
//       setScore(prevScore => prevScore - 2.5);
//     }
//   };
  
//   const startGame = () => {
//     setIsActive(true);
//     setTimeLeft(60);
//     setScore(0);
//   };
  
//   return (
//     <div>
//       <div className="scoreboard">
//         <p className='score'>Score: {score}</p>
//         <p className='time'>Time left: {timeLeft}</p>
//       </div>
//       <div className="game-board">
//         {[...Array(9).keys()].map((box, index) => (
//           <div key={index} className="box" onClick={() => handleClick(index)}>
//             {index === currentBoxIndex && <span className="keyword">HIT</span>}
//           </div>
//         ))}
//       </div>
//       <button onClick={startGame} disabled={isActive} className='start'>Start Game</button>
//     </div>
//   );
// };

// export default Game;





import React, { useState, useEffect } from 'react';
import './Game.css';
import Navbar from './Navbar';

const Game = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentBoxIndex, setCurrentBoxIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsActive(false);
      return;
    }

    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCurrentBoxIndex(Math.floor(Math.random() * 9)); 
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, timeLeft]);

  const handleClick = (index) => {
    if (index === currentBoxIndex) {
      setScore(prevScore => prevScore + 5); 
    } else {
      setScore(prevScore => prevScore - 2.5); 
    }
  };

  const startGame = () => {
    setIsActive(true);
    setTimeLeft(60);
    setScore(0);
  };

  return (
    <Navbar>
    <div>
      <div className="scoreboard">
        <p className='score'>Score: {score}</p>
        <p className='time'>Time left: {timeLeft}</p>
      </div>
      <div className="game-board">
        {[...Array(9).keys()].map((box, index) => (
          <div key={index} className="box" onClick={() => handleClick(index)}>
            {index === currentBoxIndex && <span className="keyword">HIT</span>}
          </div>
        ))}
      </div>
      <button onClick={startGame} disabled={isActive} className='start'>Start Game</button>
    </div>
    </Navbar>
  );
};

export default Game;
