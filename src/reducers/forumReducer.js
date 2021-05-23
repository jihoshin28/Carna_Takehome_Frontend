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

    if(action.type === "GET_FORUM"){
        return{
            ...state, 
            selectedForum: action.payload
        }
    }

    if(action.type === "DELETE_FORUM"){

        return{
            ...state,
            currentForums: state.currentForums.filter(forum => forum.id !== action.payload)
        }
    }
    return state
}