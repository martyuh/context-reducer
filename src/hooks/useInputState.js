import {useState} from 'react'

//no need to name
export default initialVal => {

    // sets state to argument that is passed in 
const [value,setValue] = useState(initialVal)
    //handlechange function will be returned as what changes the form
const handleChange = (e)=>setValue(e.target.value)
const reset = () =>{
    setValue('')
}
//return the state and both functions in an array
// value is the state, handleChange lets you update the input when it is called and reset is self explanatory
    return [value, handleChange,reset]
}