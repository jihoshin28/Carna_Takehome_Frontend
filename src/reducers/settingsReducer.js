const INITIAL_STATE = {
    graphType: "course"
}

export default (state = INITIAL_STATE, action) => {

    if(action.type = "SET_GRAPH_TYPE"){
        return {
            ...state,
            graphType: action.payload
        }
    }
    return state
}