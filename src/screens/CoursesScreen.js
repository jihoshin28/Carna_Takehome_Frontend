import React from 'react'
import { connect } from 'react-redux'
import {getCourses} from '../actions'
import CourseSection from '../components/CourseSection'
import Section from '../components/Section'

class CoursesScreen extends React.Component {
    componentDidMount(){
        this.props.getCourses()
        console.log(this.props.courses, "COURSES")
    }
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Courses Screen</h1>
                {this.props.courses.map(course => {
                    return(
                        <Section>
                            <CourseSection name = {course.subject} type = {course.subject} imageURL = {course.image}/> 
                        </Section>
                    ) 
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