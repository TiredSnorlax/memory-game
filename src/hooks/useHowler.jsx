import React from 'react'

import { useEffect } from 'react'

import { Howler, Howl } from 'howler'

const useHowler = () => {
    const playSound = (url) => {
        const sound = new Howl({
        src: url,
        })

        sound.play();
    }

    useEffect(() => {
        Howler.volume(1);
    }, [])

    return { playSound };

}

export default useHowler