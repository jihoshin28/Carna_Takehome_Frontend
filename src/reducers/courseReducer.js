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

    if(action.type === "DELETE_COURSE"){
        return{
            ...state,
            currentCourses: state.currentCourses.filter(course => course.id !== action.payload)
        }
    }

    if(action.type === "REMOVE_STUDENT_COURSE"){
        return {
            ...state,
            selectedCourse: {
                ...state.selectedCourse,
                students: state.selectedCourse.students.filter(student => student.id !== action.payload)
            }
        }
    }
    return state
}