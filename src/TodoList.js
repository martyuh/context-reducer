import React,{useContext} from 'react'
import TodoItem from './TodoItem'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import CheckBox from '@material-ui/core/Checkbox'
import { v4 as uuidv4 } from 'uuid'
import {TodosContext,todoReducer} from './context/todosContext'

const TodoList = (props) => {

        //destructured object passed in from the todosContext useContext allows access to the context. destructure todos from todoStuff
        const todos =useContext(TodosContext)
    // if todos exist render the paper element
    if(todos.length)return (
        <Paper>
            <List>
            {/* i is the index */}
                {todos.map((todo,i)=>(
                <React.Fragment key={i}>
                <TodoItem 
                // id={todo.id} 
                // task={todo.task} 
                // completed={todo.completed} 
                // spread operator to spread all the properties as props
                {...todo}
                />          
                {/* if the index is smaller than the length display the divider, if it is the last one do not */}
                {i<todos.length-1 && <Divider/>}
                </React.Fragment>
                ))}
            </List>
            
        </Paper>
    )
    // if no todos do not render paper
return null
}

export default TodoList
