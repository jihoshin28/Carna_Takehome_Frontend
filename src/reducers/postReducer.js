const INITIAL_STATE = {
    currentPosts: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_POSTS"){
        return{
            ...state,
            currentPosts: action.payload
        }
    }
    return state
}