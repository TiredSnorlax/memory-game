import './App.css';
import { useEffect, useState } from 'react'

import Matrix from './components/Matrix';
import UserMatrix from './components/UserMatrix';
import StartMenu from './components/StartMenu';
import GameOverMenu from './components/GameOverMenu';



function App() {
  const [order, setOrder] = useState([]);
  const [matrix, setMatrix] = useState(new Array(9).fill("").map((item, i) => (i) ));

  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [gameover, setGameover] = useState(false);

  const [startMenuOpen, setStartMenuOpen] = useState(true);

  const randomSquareIndex = () => {
    const _index = Math.floor(Math.random() * 9)

    return _index
  }

  const addToOrder = (_order) => {
    _order.push(randomSquareIndex());

    setOrder([..._order]);

    setTimeout(() => {
      setCurrentlyPlaying(true);
    }, 50);
  }

  const startRound = () => {
    addToOrder([]);
  }

  const incrementScore = (id) => {
    const divRef = document.getElementById(id);
    divRef.classList.add("increment");
    setTimeout(() => {
      divRef.classList.remove("increment");
    }, 250);
  }

  const reset = () => {
    setScore(0);
    setGameover(false);

    setTimeout(() => {
      startRound();
    }, 500);

  }

  useEffect(() => {
    try {
      setHighscore(localStorage.getItem("highscore"));
    } catch (error) {
      setHighscore(0);
    }

    if (score > 0) {
      incrementScore("scoreDiv");
      addToOrder(order);
      setTimeout(() => {
        setCurrentlyPlaying(true);
      }, 500);
    }
  }, [score])

  useEffect(() => {
    if (!gameover) return;
    if (score > highscore) {
      localStorage.setItem("highscore", score)
      setHighscore(score);
      incrementScore("highScoreDiv")
    }
  }, [gameover])



  return (
    <div className="App">
      { startMenuOpen && <StartMenu startRound={startRound} setStartMenuOpen={setStartMenuOpen} />}
      { gameover && <GameOverMenu reset={reset} />}
      <div className='scoreContainer'>
        <p id="scoreDiv" >Score: {score} </p>
        <p id="highScoreDiv">Highscore: {highscore ? highscore : 0} </p>
      </div>
      <div>
        <audio src="./sounds/Sound-0.mp3" id="sound-0"></audio>
      </div>
      <Matrix matrix={matrix} order={order} currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying} />
      <UserMatrix matrix={matrix} order={order} currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying} score={score} setScore={setScore} setGameover={setGameover} />
    </div>
  );
}

export default App;
