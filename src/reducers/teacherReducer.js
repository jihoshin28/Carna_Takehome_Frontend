const INITIAL_STATE = {
    currentTeachers: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_TEACHERS"){
        return{
            ...state,
            currentTeachers: action.payload
        }
    }
    return state
}