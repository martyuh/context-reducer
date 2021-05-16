import React,{useContext} from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'
import {DispatchContext} from './context/todosContext'

const TodoForm = (props) => {
    // use custom hook useInputState
    const[value,handleChange,reset]=useInputState('')
    // dispatch  dispatches an action to the todoreducer through the dispatchcontext
    const dispatch =useContext(DispatchContext)

    const submitForm = (e) =>{
        e.preventDefault()
        // dispatches the add action with e.target.value as the task
        dispatch({type:'ADD',task:value})
        reset()
    }

    return (
        <Paper style={{margin:'1rem 0',padding:'0 1rem'}}>
            <form onSubmit={submitForm} style={{marginLeft:'.7rem'}}>
            <TextField 
            value={value} 
            onChange={handleChange} 
            margin='normal' 
            label='Add New Todo'
            fullWidth    
            />
            <button>Submit</button>
            </form>
        </Paper>
    )
}

export default TodoForm
