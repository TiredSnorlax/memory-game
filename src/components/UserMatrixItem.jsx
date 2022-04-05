import { useRef, useState, useEffect } from 'react'

import useHowler from '../hooks/useHowler';


const UserMatrixItem = ({i, answer, setAnswer, currentlyPlaying}) => {
    const selfRef = useRef(null);
    const { playSound } = useHowler();

    const click = () => {
        if (currentlyPlaying) return;
        selfRef.current.classList.add("shine");

        playSound(`${process.env.PUBLIC_URL}sounds/${i}.mp3`)
        setAnswer([...answer, i])
        shine();
    }

    const shine = () => {
        selfRef.current.classList.add("shine");

        setTimeout(() => {
        selfRef.current.classList.remove("shine");

        }, 350);

    }

    return (
        <div className="matrixItem" ref={selfRef} onClick={click} >
        </div>
    )
}

export default UserMatrixItem