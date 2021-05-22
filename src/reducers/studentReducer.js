const INITIAL_STATE = {
    currentStudents: [],
    currentStudent: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_STUDENTS"){
        return{
            ...state,
            currentStudents: action.payload
        }
    }

    if(action.type === "GET_STUDENT"){
        return{
            ...state,
            currentStudent: action.payload
        }
    }

    if(action.type === "UPDATE_STUDENT"){
        return{
            ...state,
            current: action.payload
        }
    }

    if(action.type === "DELETE_STUDENT"){
        return{
            ...state,
            currentStudents: action.payload
        }
    }
    return state
}