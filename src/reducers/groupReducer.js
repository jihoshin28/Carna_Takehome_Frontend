const INITIAL_STATE = {
    currentGroups: [],
    selectedGroup: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_GROUPS"){
        return{
            ...state,
            currentGroups: action.payload
        }
    }

    if(action.type === "GET_GROUP"){
        return{
            ...state, 
            selectedGroup: action.payload
        }
    }
    return state
}