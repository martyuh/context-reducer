
 import { v4 as uuidv4 } from 'uuid'
 import useLocalStorageState from './useLocalStorageState'

 export default initialTodos => {
    //grab state from localstorage 
    //set the key in the custom localstorage hook
    // pass in the initial list
    // useEffect in custom hook automatically sets localStorage when state changes
    const[todos,setTodos]=useLocalStorageState("todos",initialTodos)
    // return an object with state, functions to manipulate state
    return{
        todos,
        addTodo: newTodoText =>{
            setTodos([...todos,{id:uuidv4(),task:newTodoText,completed:false}])
        },
        removeTodo: (todoId) =>{
            const updatedTodos =todos.filter(todo=>todoId!==todo.id)
            // filter out removed todo. anything that doesn't match is returned back
            setTodos(updatedTodos)
        },
        toggleTodo:(todoId) => {
            //toggles todo using map to isolate todo and toggle completed
           const updatedTodos = todos.map(todo=>
            // todo.completed is opposite when clicked
            todo.id===todoId ? {...todo,completed:!todo.completed}:todo)
           setTodos(updatedTodos)
        },
        editTodo:(todoId,editedTodoText) =>{
            const editedTodo = todos.map((todo)=>todoId===todo.id?{...todo,task:editedTodoText}:todo)
            setTodos(editedTodo)
        } 
    }
 }
