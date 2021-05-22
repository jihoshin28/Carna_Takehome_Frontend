import server from '../services/server'

// STUDENT ACTIONS

export const getStudents = () => async dispatch => {
    const result = await server.get('/students')
    console.log(result.data)
    dispatch({
        type: "GET_STUDENTS",
        payload: result.data.students
    })
}

export const getStudent = (id) => async dispatch => {
    const result = await server.get(`/student/${id}`)
    console.log(result.data)
    dispatch({
        type: "GET_STUDENT",
        payload: result.data
    })
}

export const updateStudent = (id, body) => async dispatch => {
    const result = await server.get(`/student/${id}`)
    console.log(result.data)
    dispatch({
        type: "UPDATE_STUDENT",
        payload: result.data
    })
}

export const deleteStudent = (id) => async dispatch => {
    const result = await server.get(`/student/${id}`)
    console.log(result.data)
    dispatch({
        type: "DELETE_STUDENT",
        payload: result.data
    })
}


// TEACHER ACTIONS

export const getTeachers = () => async dispatch => {
    const result = await server.get('/teachers')
    console.log(result.data)
    dispatch({
        type: "GET_TEACHERS",
        payload: result.data.teachers
    })
}

// COURSE ACTIONS

export const getCourses = () => async dispatch => {
    const result = await server.get('/courses')
    console.log(result.data)
    dispatch({
        type: "GET_COURSES",
        payload: result.data.courses
    })
}

// GROUP ACTIONS

export const getGroups = () => async dispatch => {
    const result = await server.get('/groups')
    dispatch({
        type: "GET_GROUPS",
        payload: result.data.groups
    })
}


// FORUM ACTIONS

export const getForums = () => async dispatch => {
    const result = await server.get('/forums')
    console.log(result.data)
    dispatch({
        type: "GET_FORUMS",
        payload: result.data.forums
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
