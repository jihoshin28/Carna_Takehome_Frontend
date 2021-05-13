import express from '../services/Express'

export const getUsers = () => async dispatch => {
    const result = await express.get('/users')
    console.log(result.data)
    dispatch({
        type: "GET_USERS",
        payload: result.data
    })
}