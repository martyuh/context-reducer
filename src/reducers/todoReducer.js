import { v4 as uuidv4 } from 'uuid'

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            // action.task will be passed in as the payload
            return [...state,{id:uuidv4(),task:action.task,completed:false}]
        case 'REMOVE':
            // filter out removed todo. anything that doesn't match is returned back
            return state.filter(todo=>action.id!==todo.id)
        case 'TOGGLE':
               //toggles todo using map to isolate todo and toggle completed
            return state.map(todo=>
             // todo.completed is opposite when clicked
             todo.id===action.id ? {...todo,completed:!todo.completed}:todo)      
        case 'EDIT':
            return state.map((todo)=>action.id===todo.id?{...todo,task:action.newTask}:todo)
        default:
            return state
    }
}

//{type:'ADD', task:'walk'}
//{type:'REMOVE',id:123}
//{type:'TOGGLE',id:123}
//{type:'EDIT', id:123, newTask: 'word'}}
