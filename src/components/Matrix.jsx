import { useState, useEffect, useRef } from 'react'
import MatrixItem from "./MatrixItem"

import "../styles/matrix.css"

const Matrix = ({ matrix, order, currentlyPlaying, setCurrentlyPlaying }) => {
  const [toShine, setToShine] = useState(null);

  const matrixRef = useRef(null);

  const startShining = () => {
    let _index = 0;
    const shineInterval = setInterval(() => {
      setToShine([order[_index]]);
      if (_index + 1 >= order.length ) {
          setCurrentlyPlaying(false);
          shrink();
          clearInterval(shineInterval);
        }
      _index++;
    }, 800);
  }

  const shrink = () => {
    setTimeout(() => {
        matrixRef.current.classList.add("shrink");
    }, 1000);
  }

  const grow = () => {
    setTimeout(() => {
        matrixRef.current.classList.remove("shrink");
    }, 1000);

  }

  useEffect(() => {
    if (order.length < 1) return;

  }, [order])

  useEffect(() => {
    if (order.length < 1) {
        grow();
    }
    else if (currentlyPlaying && order.length > 0) {
        grow();
        setTimeout(() => {
            startShining();
        }, 1100);
    } else {
        shrink();
    }

  }, [currentlyPlaying])



  return (
      <div className='matrixContainer'>
        <div className='matrix' ref={matrixRef}>
            { matrix && matrix.map( (i) => (
            <MatrixItem key={i} i={i} toShine={toShine} />
            ))}
        </div>
      </div>
  )
}

export default Matrix