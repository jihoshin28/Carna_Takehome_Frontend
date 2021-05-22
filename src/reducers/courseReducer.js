const INITIAL_STATE = {
    currentCourses: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_COURSES"){
        return{
            ...state,
            currentCourses: action.payload
        }
    }
    return state
}