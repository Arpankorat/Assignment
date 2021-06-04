import axios from "axios"

export const getTodos = (data) => {
    return{
        type: 'Todos',
        payload: data
    }
}

export const  todos = () => (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(res => dispatch(getTodos(res)))
    .then(res=> console.log(res))
    
    }