const intialState = {
    Todos: null
}

const todoReducer = (state=intialState,action) => {

    switch(action.type){
        case 'Todos':{
            return{
                ...state,
                Todos: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default todoReducer;