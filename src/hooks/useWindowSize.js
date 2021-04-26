import { useState, useEffect } from 'react'

export default function useWindowSize() {
    const [ windowSize, setWindowSize ] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        let timeoutId = null
        function handleResize() {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                if (typeof window !== 'undefined') {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
            }, 150);
        }

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}