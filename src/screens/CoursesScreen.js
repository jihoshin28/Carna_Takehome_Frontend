import React from 'react'
import { connect } from 'react-redux'
import {getCourses, deleteCourse } from '../actions'
import CourseSection from '../components/CourseSection'
import Section from '../components/Section'
import Filter from '../components/Filter'
import Sort from '../components/Sort'

class CoursesScreen extends React.Component {

    constructor(props){
        super()
        this.state = {
            courses: props.courses
        }
    }

    componentDidMount(){
        this.props.getCourses()
        console.log(this.props.courses, "COURSES")
    }

    sort = (value) => {
        console.log(value)
        let sorted
        if(value === 'Subject'){
            sorted = this.props.courses.sort((a,b) => {
                console.log(a)
                return a.subject.localeCompare(b.subject);
            })
        } else if(value === 'Class Size'){
            sorted = this.props.courses.sort((a,b) => {
                console.log(a)
                return a.students.length - b.students.length
            })
        } 
        console.log(sorted)
        this.setState({
            courses: sorted
        })
    }

    filter = (value) => {
        let filtered 
        if(value === 'Biology'){
            filtered = this.props.courses.filter((course) => {
                return course.subject === 'biology'
            })
        } else if(value === 'English'){
            filtered = this.props.courses.filter((course) => {
                return course.subject === 'english'
            })
        } else if(value === 'Math'){
            filtered = this.props.courses.filter((course) => {
                return course.subject === 'math'
            })
        } else if(value === 'Programming'){
            filtered = this.props.courses.filter((course) => {
                return course.subject === 'programming'
            })
        } else if(value === 'History'){
            filtered = this.props.courses.filter((course) => {
                return course.subject === 'history'
            })
        } else if(value === 'Physics'){
            filtered = this.props.courses.filter((course) => {
                return course.subject === 'physics'
            })
        }
        console.log(filtered)
        this.setState({
            courses: filtered
        })
    }

    delete = (course_id) => {
        this.props.deleteCourse(course_id)
        let newCourseState = this.state.courses.filter(course => course.id !== course_id)
        this.setState({
            courses: newCourseState
        })
    }

    render(){
        return(
            <div>
                <h1 class = "screenHeader">Courses Screen</h1>
                <div class = "row filter-sort-row">
                    <div class = "col-6">
                        <Filter options = {['English', 'Biology', 'Math', 'Physics', 'Programming', 'History']} filter = {this.filter}/>
                    </div>
                    <div class = "col-6">
                        <Sort options = {['Subject', 'Class Size']} sort = {this.sort}/>
                    </div>
                </div>
                {this.state.courses.map(course => {
                    return(
                        <Section>
                            <CourseSection delete = {this.delete} course_id = {course.id} history = {this.props.history} subject = {course.subject} type = {course.subject} imageURL = {course.image} numberEnrolled = {course.students.length}/> 
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

export default connect(mapStateToProps, {getCourses, deleteCourse})(CoursesScreen)