import React, { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [state, setState] = useState(false)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => { 
                setData(response)
                setState(true)    
            })
            .catch(() => setState(false))
    },[])
    return {
        data,
        state
    }
}
