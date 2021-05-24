const INITIAL_STATE = {
    currentGroups: [],
    selectedGroup: [],
    allStudentGroups: []
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

    if(action.type === "DELETE_GROUP"){

        return{
            ...state,
            currentGroups: state.currentGroups.filter(group => group.id !== action.payload)
        }
    }

    if(action.type === "GET_STUDENT_GROUPS"){
        return {
            ...state,
            allStudentGroups: action.payload
        }
    }

    if(action.type === "REMOVE_STUDENT_GROUP"){
        return {
            ...state,
            selectedGroup: {
                ...state.selectedGroup,
                students: state.selectedGroup.students.filter(student => student.id !== action.payload)
            }
        }
    }


    return state
}