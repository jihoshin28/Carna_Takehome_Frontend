const INITIAL_STATE = {
    currentStudents: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_STUDENTS"){
        return{
            ...state,
            currentStudents: action.payload
        }
    }
    return state
}