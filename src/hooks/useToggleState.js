// call useState
//return piece of state and a function to toggle it

import {useState} from 'react'

const useToggle = (initialValue=false) => {

    const [state,setState] = useState(initialValue)

    // this is returned to the component calling it. setting the toggle will not be required as it is set in this function
    const toggle = ()=>{
        setState(!state)
    }

    //return piece of state and a function to toggle it in an array
    return [state,toggle]
}

export default useToggle