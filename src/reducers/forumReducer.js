const INITIAL_STATE = {
    currentForums: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_STUDENTS"){
        return{
            ...state,
            currentForums: action.payload
        }
    }
    return state
}