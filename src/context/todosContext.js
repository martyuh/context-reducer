//todos
//all methods that interact with todos
import {createContext} from 'react'
import {todoReducer} from '../reducers/todoReducer'
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer'
//this will be rendered if nothing is in storage
const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true }
  ];

//  create a context
//should create two context. one fo the todos the other for the methods/dispatch
//the reason for the that is that when the todos update, because dispatch is apart of the value it will cause the value in
// the context to change and therefore cause the context to update and trigger all the components that are just
// dispatching methods to render.
export const TodosContext = createContext()
export const DispatchContext=createContext()


    // provider provides access to state and methods in the context and wraps around child
    //component props passed as children from the app component
export const TodosProvider =(props)=>{
//pass todosreducer to localStorageReducer, the defaultTodos, and the key. 
//within the customhook reducer it will have access to the todoReducer where it will establish state and dispatch actions to the reducer
//todos is the state that is returned after the todoreducer is passed localstorage or default todos through the 
//uselocalstoragereducer
  const[todos,dispatch] =useLocalStorageReducer('todos',defaultTodos,todoReducer)
    return (
        //pass state and the dispatch method as an object to the provider so that it can be access by the children 
        //components
        //should create two context. this will create two providers. one for the todos the other for the methods/dispatch
        //the reason for the that is that when the todos update, because dispatch is apart of the value it will cause the 
        //value in the context to change and therefore cause the context to update and trigger all the components that are 
        //just dispatching methods to render.
        // to eliminate unnecessary rerenders eleminate the object passing when possible to so it doesn't have to make a new object everytime the context updates
    <TodosContext.Provider value={todos}>
      {/* when you have two providers, if you nest the dispatch provider within the todos one in the context file, it will be considered as being a child of todosprovider and not need to be wrapped within the todosprovider in the app component */}
      {/* because dispatch is set to dispatch it is making a new object everytime the context is updated*/}
      {/* you can eliminate that by just passing one itme without it being in an object */}
    <DispatchContext.Provider value={dispatch}>
        {props.children}
    </DispatchContext.Provider>
    </TodosContext.Provider>
    )
}
