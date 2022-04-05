import "../styles/menu.css"
import { useRef, useEffect } from 'react'


const GameOverMenu = ({reset}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      menuRef.current.classList.remove("close");
    }, 200);
  }, [])


  const click = () => {
    menuRef.current.classList.add("close");
    setTimeout(() => {
      reset();
    }, 550);

  }

  return (
    <div className='menuContainer' ref={menuRef} >
        <div className='menu close'>
            <h2>Game Over :(</h2>
            <p>Play Again?</p>
            <button onClick={click}>Play</button>
        </div>
    </div>
  )
}

export default GameOverMenu