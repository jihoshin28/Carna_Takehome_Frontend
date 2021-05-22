import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import studentReducer from './studentReducer'
import teacherReducer from './teacherReducer'
import forumReducer from './forumReducer'
import courseReducer from './courseReducer'
import postReducer from './postReducer'
import groupReducer from './groupReducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['students', 'teachers', 'courses', 'groups', 'forums', 'posts']
}

const reducer = combineReducers({
    students: studentReducer,
    teachers: teacherReducer,
    forums: forumReducer,
    courses: courseReducer,
    posts: postReducer,
    groups: groupReducer,
    
})


export default persistReducer(persistConfig, reducer)