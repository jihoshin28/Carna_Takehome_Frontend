const INITIAL_STATE = {
    currentCourses: [],
    selectedCourse: {
        students: []
    },
    allStudentCourses: [],
    currentCourseStudents: [],
    selectedCourseStudent: []
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

    if(action.type === "CREATE_COURSE"){
        return{
            ...state, 
            currentCourses: [
                ...state.currentCourses, action.payload
            ]
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

    if(action.type === "ALL_STUDENT_COURSES"){
        return {
            ...state, 
            allStudentCourses: action.payload
        }
    }

    if(action.type === "COURSE_STUDENTS_INFO"){
        return{
            ...state,
            currentCourseStudents: action.payload
        }
    }

    if(action.type === "COURSE_STUDENT_INFO"){
        return{
            ...state,
            selectedCourseStudent: action.payload
        }
    }
    return state
}