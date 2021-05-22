const INITIAL_STATE = {
    currentForums: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_FORUMS"){
        return{
            ...state,
            currentForums: action.payload
        }
    }
    return state
}