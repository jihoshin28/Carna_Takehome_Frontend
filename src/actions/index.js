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

// export const updateStudent = (id, body) => async dispatch => {
//     const result = await server.get(`/student/${id}`)
//     console.log(result.data)
//     dispatch({
//         type: "UPDATE_STUDENT",
//         payload: result.data
//     })
// }

export const deleteStudent = (id) => async dispatch => {
    const result = await server.delete(`/students/${id}`)
    console.log(result)
    dispatch({
        type: "DELETE_STUDENT",
        payload: id
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

export const getTeacher = (id) => async dispatch => {
    const result = await server.get(`/teachers/${id}`)
    console.log(result.data.teacher)
    dispatch({
        type: "GET_TEACHER",
        payload: result.data.teacher
    })
}

export const deleteTeacher = (id) => async dispatch => {
    const result = await server.delete(`/teachers/${id}`)
    console.log(result)
    dispatch({
        type: "DELETE_TEACHER",
        payload: id
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

export const getCourse = (id) => async dispatch => {
    const result = await server.get(`/courses/${id}`)
    console.log(result.data)
    dispatch({
        type: "GET_COURSE",
        payload: result.data.course
    })
}

export const deleteCourse = (id) => async dispatch => {
    const result = await server.delete(`/courses/${id}`)
    console.log(result)
    dispatch({
        type: "DELETE_COURSE",
        payload: id
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

export const getGroup = (id) => async dispatch => {
    const result = await server.get(`/groups/${id}`)
    console.log(result)
    dispatch({
        type: "GET_GROUP",
        payload: result.data.group
    })
}

export const deleteGroup = (id) => async dispatch => {
    const result = await server.delete(`/groups/${id}`)
    console.log(result)
    dispatch({
        type: "DELETE_GROUP",
        payload: id
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

export const getForum = (id) => async dispatch => {
    const result = await server.get(`/forums/${id}`)
    console.log(result.data)
    dispatch({
        type: "GET_FORUM",
        payload: result.data.forum
    })
}

export const deleteForum = (id) => async dispatch => {
    const result = await server.delete(`/forums/${id}`)
    console.log(result)
    dispatch({
        type: "DELETE_FORUM",
        payload: id
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

export const getPost = (id) => async dispatch => {
    const result = await server.get(`/post/${id}`)
    console.log(result.data)
    dispatch({
        type: "GET_POST",
        payload: result.data.post
    })
}

// STUDENT COURSE ACTIONS

export const getAllStudentCourses = () => async dispatch => {
    const result = await server.get('/student_courses')
    dispatch({
        type: "GET_STUDENT_COURSES",
        payload: result.data.student_courses
    })
}

export const getStudentCourseInfo = (student_id) => async dispatch => {
    const result = await server.get(`/student_courses/${student_id}`)
    dispatch({
        type: "STUDENT_COURSE_INFO",
        payload: result.data.student_course
    })
}


export const removeStudentCourse = (course_id, student_id) => async dispatch => {
    console.log(course_id, student_id)
    const result = await server.delete(`/student_courses/${course_id}/${student_id}`)
    console.log(result)
    dispatch({
        type: "REMOVE_STUDENT_COURSE",
        payload: student_id
    })
} 

// STUDENT GROUP ACTIONS

export const removeStudentGroup = (group_id, student_id) => async dispatch => {
    console.log(group_id, student_id)
    const result = await server.delete(`/student_groups/${group_id}/${student_id}`)
    dispatch({
        type: "REMOVE_STUDENT_GROUP",
        payload: student_id
    })
} 
