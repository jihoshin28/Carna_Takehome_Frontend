const INITIAL_STATE = {
    users: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_USERS"){
        return{
            ...state,
            users: action.payload
        }
    }
    return state
}