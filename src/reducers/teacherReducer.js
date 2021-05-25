const INITIAL_STATE = {
    currentTeachers: [],
    selectedTeacher: null,
    currentAdmin: null,
    loggedIn: false,
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

    if(action.type === "SIGN_IN"){
        return{
            ...state,
            currentAdmin: action.payload,
            loggedIn: true
        }
    }

    if(action.type === "SIGN_OUT"){
        return{
            ...state,
            currentAdmin: null,
            loggedIn: false
        }
    }

    if(action.type === "UPDATE_ADMIN_USERNAME"){
        return {
            ...state,
            currentAdmin: {
                ...state.currentAdmin,
                username: action.payload
            }
        }
    }

    if(action.type === "UPDATE_ADMIN_PASSWORD"){
        return {
            ...state,
            currentAdmin: {
                ...state.currentAdmin,
                password: action.payload
            }
        }
    }

    if(action.type === "UPDATE_ADMIN_EMAIL"){
        return {
            ...state,
            currentAdmin: {
                ...state.currentAdmin,
                email: action.payload
            }
        }
    }
    
    return state
}