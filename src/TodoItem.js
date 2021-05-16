import React, { useContext, memo } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import {DispatchContext} from './context/todosContext'

//inefficient without memo because every time a todo is added the todolist changes and every todo is remapped over and todoitems is resent new props every time. This of course results in a rerender of every todo every time
//purecomponent in the class based approach allowed you to prevent a rerender of already established todos by tracking the props. if a prop was different or new, that todo would rerender 
//react.memo is a higher order component that replicates this process
const TodoItem = ({task,completed,id}) => {
 
    //custom hook to toggle whether the todoitem is being edited
    const [isEditing,toggle] = useToggleState(false)
    // dispatch from todocontext from todostuff
    const dispatch = useContext(DispatchContext)

    return (
        //if isediting is toggled show form if not show todoitem
        <ListItem style={{height:'100px'}}>
        { isEditing ? <EditTodoForm task={task} id={id} toggleEditForm={toggle}/>:
        <><CheckBox tabIndex={-1} checked={completed} onClick={()=>dispatch({type:'TOGGLE',id:id})}/>
        <ListItemText style={{textDecoration: completed?'line-through':'none'}}>
            {task} 
        </ListItemText>
        <ListItemSecondaryAction>
        {/* call toggle to flip state which renders form */}
        <IconButton aria-label='Edit' onClick={toggle}>
        <EditIcon/>
        </IconButton>
        <IconButton aria-label='Delete' onClick={()=>dispatch({type:'REMOVE',id:id})}>
        <DeleteIcon />
        </IconButton>
        </ListItemSecondaryAction></>
        }
    </ListItem>
    )
}

//purecomponent in the class based approach allowed you to prevent a rerender of already established todos by tracking the props. if a prop was different or new, that todo would rerender, otherwise if it were the same that todo would not be rerendered
//react.memo is a higher order component that replicates this process
//memoization is caching results. react.memo is remembering the older version and recognizes if it has changed 
export default memo(TodoItem) 
