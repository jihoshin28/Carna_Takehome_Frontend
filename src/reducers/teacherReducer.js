const INITIAL_STATE = {
    currentTeachers: [],
    selectedTeacher: null,
    currentAdmin: null,
    graphType: "course"
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "GET_TEACHERS"){
        return{
            ...state,
            currentTeachers: action.payload
        }
    }

    if(action.type === "GET_TEACHER"){
        return{
            ...state,
            selectedTeacher: action.payload
        }
    }

    if(action.type === "DELETE_TEACHER"){

        return{
            ...state,
            currentTeachers: state.currentTeachers.filter(teacher => teacher.id !== action.payload)
        }
    }

    if(action.type === "SET_GRAPH_TYPE"){
        return {
            ...state,
            graphType: action.payload 
        }
    }
    
    return state
}