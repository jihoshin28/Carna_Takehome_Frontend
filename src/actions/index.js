import server from '../services/server'

// STUDENT ACTIONS

export const getStudents = () => async dispatch => {
    const result = await server.get('/students')
    console.log(result.data)
    dispatch({
        type: "GET_STUDENTS",
        payload: result.data
    })
}

// TEACHER ACTIONS

export const getTeachers = () => async dispatch => {
    const result = await server.get('/teachers')
    console.log(result.data)
    dispatch({
        type: "GET_TEACHERS",
        payload: result.data
    })
}

// COURSE ACTIONS

export const getCourses = () => async dispatch => {
    const result = await server.get('/courses')
    console.log(result.data)
    dispatch({
        type: "GET_COURSES",
        payload: result.data
    })
}

// GROUP ACTIONS

export const getGroups = () => async dispatch => {
    const result = await server.get('/groups')
    console.log(result.data)
    dispatch({
        type: "GET_GROUPS",
        payload: result.data
    })
}


// FORUM ACTIONS

export const getForums = () => async dispatch => {
    const result = await server.get('/forums')
    console.log(result.data)
    dispatch({
        type: "GET_FORUMS",
        payload: result.data
    })
}


// POST ACTIONS

export const getPosts = () => async dispatch => {
    const result = await server.get('/posts')
    console.log(result.data)
    dispatch({
        type: "GET_POSTS",
        payload: result.data
    })
}
