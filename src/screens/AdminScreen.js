import React from 'react'
import ScatterGraph from '../graphs/ScatterGraph'
import BarGraph from '../graphs/BarGraph'
import PieGraph from '../graphs/PieGraph'
import { connect } from 'react-redux'
import {getAllStudentCourses, getStudentGroups, getCourses } from '../actions'
import ClassSection from '../graphs/graphSections/CourseSection'
import GroupSection from '../graphs/graphSections/GroupSection'
import ForumSection from '../graphs/graphSections/ForumSection'

class AdminScreen extends React.Component {

    async componentDidMount(){
        await this.props.getAllStudentCourses()
        await this.props.getCourses()
        await this.props.getStudentGroups()
    }

    classSizeData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let classes = {}
        this.props.studentCourses.forEach((studentCourse) => {
            let course = this.props.courses.find(course => {
                return studentCourse.course_id === course.id
            })
            if(classes[course.subject]){
                classes[course.subject] += course.students.length
            } else {
                classes[course.subject] = course.students.length
            }
        })
        let keys = Object.keys(classes)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(classes[keys[i]])
            data.push(array)
        }
        return data
    }

    scatterData = () => {
        let data = [['Completion', 'Score']]
        this.props.studentCourses.forEach((studentCourse) => {
            data.push([studentCourse.completion, studentCourse.score])
        })
        return data
    }

    render(){
        return(
            <div>
                <h1 class = "screenHeader">Admin</h1>
                <div className = "container">
                    <ClassSection/>
                    <GroupSection/>
                    <ForumSection/>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses.currentCourses, 
        studentCourses: state.courses.allStudentCourses,
        studentGroups: state.groups.allStudentGroups
    }
    
}

export default connect(mapStateToProps, {getAllStudentCourses, getStudentGroups, getCourses})(AdminScreen)