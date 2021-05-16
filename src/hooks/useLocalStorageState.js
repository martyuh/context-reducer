import {useState,useEffect} from 'react'


const useLocalStorageState = (key,defaultVal) => {
 
    //make piece of state based off of value in locale storage
    // pull from localstorage
    // state is generic for reuse
    const [state,setState] = useState(()=>{
        let val
        try{
            // if there is nothing under the key, jsonparse the String version of default value
        val = JSON.parse(window.localStorage.getItem(key)||String(defaultVal))
        }
        catch(e){
            // if the parse doesn't work, set val to what was passed in when the user uses the hook
        val=defaultVal
        }
        return val
    })

    //useEffect to update localstorage when state changes
    useEffect(()=>{
        // gets stored as json in localStorage , 'todos' will be the key, must stringify todos object, if there is nothing in localstorage under the key name use defaultVal
        window.localStorage.setItem(key,JSON.stringify(state))

   },[state])
// pass in state and the default setState function to update state
   return[state,setState]

}

export default useLocalStorageState
