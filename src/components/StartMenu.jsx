import { useRef } from 'react'

import "../styles/menu.css"

const StartMenu = ({ startRound, setStartMenuOpen }) => {
    const menuRef = useRef(null);

    const start = () => {
        const _audio = new AudioContext();
        menuRef.current.classList.add("close");
        setTimeout(() => {
            setStartMenuOpen(false);
            startRound();
        }, 800);
    }


  return (
    <div className='menuContainer' ref={menuRef} >
        <div className='menu' >
            <h2>Test your memory!</h2>
            <p>Memorise the sequence played and play it back.</p>
            <button onClick={start}>Start</button>
        </div>
    </div>
  )
}

export default StartMenu