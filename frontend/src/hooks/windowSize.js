import { useState, useEffect} from 'react'

export function windowSize() {
const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        const resizeScreen = () =>{
            return setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', resizeScreen)

        return () => {window.removeEventListener('resize', resizeScreen)}
    }, [windowSize])

    return windowSize;
}