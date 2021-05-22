import React from 'react'
import { connect } from 'react-redux'
import {getCourses} from '../actions'
import CourseSection from '../components/CourseSection'

class CoursesScreen extends React.Component {
    componentDidMount(){
        this.props.getCourses()
        console.log(this.props.courses)
    }
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Courses Screen</h1>
                {this.props.courses.map(course => {
                    console.log(course)
                    return <CourseSection name = {course.subject} type = {course.subject} imageURL = {course.image}/> 
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses.currentCourses
    }
}

export default connect(mapStateToProps, {getCourses})(CoursesScreen)