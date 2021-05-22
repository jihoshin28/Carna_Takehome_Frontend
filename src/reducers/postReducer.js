const INITIAL_STATE = {
    currentPosts: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_STUDENTS"){
        return{
            ...state,
            currentPosts: action.payload
        }
    }
    return state
}