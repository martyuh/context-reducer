import {useContext} from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'
import Paper from '@material-ui/core/Paper'
import {DispatchContext} from './context/todosContext'

const EditTodoForm = ({task,id,toggleEditForm}) => {

    // dispatch from todoscontext
    const dispatch = useContext(DispatchContext)
    
    const [value,handleChange,reset]=useInputState(task)

    const submitForm = (e) =>{
        e.preventDefault()
        dispatch({type:'EDIT',id:id,newTask:value})
        reset()
        toggleEditForm()
    }

    return (
        
            <form onSubmit={submitForm}
            style={{marginLeft:'.7rem',width:'50%'}}
            >
            <TextField 
            value={value} 
            onChange={handleChange} 
            margin='normal' 
            label='Edit Todo'
            fullWidth    
            />
            <button>Submit</button>


            </form>
       
    )
}

export default EditTodoForm
