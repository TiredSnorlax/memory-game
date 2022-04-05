import { useState, useRef, useEffect } from 'react'
import UserMatrixItem from './UserMatrixItem'

const UserMatrix = ({ matrix, order, currentlyPlaying, setCurrentlyPlaying, score, setScore, setGameover }) => {
  const matrixRef = useRef(null);

  const [answer, setAnswer] = useState([]);

  const shrink = () => {
    setTimeout(() => {
        matrixRef.current.classList.add("shrink");
    }, 1000);
  }

  const grow = () => {
    setAnswer([]);
    setTimeout(() => {
        matrixRef.current.classList.remove("shrink");
    }, 1000);
  }

  useEffect(() => {
    if (currentlyPlaying) {
        shrink();
    } else if (!currentlyPlaying && order.length > 0) {
        grow();

    }

  }, [currentlyPlaying])


  useEffect(() => {
    if (answer.length < 1) return;

    const _index = answer.length - 1;
    if (answer[_index] !== order[_index]) {
        setTimeout(() => {
          setGameover(true);
        }, 500);
    }
    else if (answer.length >= order.length) {
        setScore(score + 1);
        shrink();
    }
  }, [answer])



  return (
      <div className='matrixContainer'>
        <div className='matrix shrink' ref={matrixRef}>
            { matrix && matrix.map( (i) => (
                <UserMatrixItem key={i} i={i} answer={answer} setAnswer={setAnswer} currentlyPlaying={currentlyPlaying} />
            ))}
        </div>
      </div>
  )
}

export default UserMatrix