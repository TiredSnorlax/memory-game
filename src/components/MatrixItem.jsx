import { useRef, useEffect, useState } from "react"

import useHowler from "../hooks/useHowler";

import "../styles/matrix-item-style.css"


const MatrixItem = ({ i, toShine }) => {
  const selfRef = useRef(null);
  const { playSound } = useHowler();

  const shine = () => {
    selfRef.current.classList.add("shine");

    playSound(`${process.env.PUBLIC_URL}sounds/${i}.mp3`)

    setTimeout(() => {
      selfRef.current.classList.remove("shine");

    }, 350);

  }

  useEffect(() => {
    if (toShine && toShine[0] === i) {
      selfRef.current.click();

    }
  }, [toShine])




  return (
      <div className="matrixItem" ref={selfRef} onClick={shine} >
      </div>
  )
}

export default MatrixItem