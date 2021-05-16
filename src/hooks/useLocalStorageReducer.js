import {useReducer, useEffect} from 'react'

// will take a key, defaultVal, and reducer
const useLocalStorageReducer = (key,defaultVal,reducer) => {
 
    // make piece of state based off of value in locale storage
    // pull from localstorage
    // state is generic for reuse
    // use the reducer that was passed in to this custom hook reducer
    // use the defaultVal that was passed in,
    // but first you want to check in local storage first to see if there is an initialvalue provided by the 
    // localstorage based on the key that was passed in
    // to do that you pass in a third function to establish an initialState. whatever is returned from the function will 
    // be stored in state
    const [state,dispatch] = useReducer(reducer,defaultVal,()=>{
        let val
        try{
            //looks in window storage to grab the object with the key
            // if there is nothing under the key, jsonparse the String version of default value
            // which will just be the defaultVal object
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
// return state and the dispatch function to update the reducer
   return[state,dispatch]

}

export {useLocalStorageReducer}
