const INITIAL_STATE = {
    currentGroups: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_STUDENTS"){
        return{
            ...state,
            currentGroups: action.payload
        }
    }
    return state
}