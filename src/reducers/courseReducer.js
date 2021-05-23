const INITIAL_STATE = {
    currentCourses: [],
    selectedCourse: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_COURSES"){
        return{
            ...state,
            currentCourses: action.payload
        }
    }

    if(action.type === "GET_COURSE"){
        return{
            ...state, 
            selectedCourse: action.payload
        }
    }
    return state
}