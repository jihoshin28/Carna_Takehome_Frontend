import React from 'react'
import ScatterGraph from '../ScatterGraph'
import BarGraph from '../BarGraph'
import PieGraph from '../PieGraph'
import { connect } from 'react-redux'
import {getAllStudentCourses, getStudentGroups, getCourses } from '../../actions'

class CourseSection extends React.Component {

    async componentDidMount(){
        await this.props.getAllStudentCourses()
        await this.props.getCourses()
    }

    classSizeData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let classes = {}
        this.props.courses.find(course => {
            if(classes[course.id]){
                classes[course.id] += course.students.length
            } else {
                classes[course.id] = course.students.length
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

    classSubjectData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let classes = {}
        this.props.courses.find(course => {
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
            <React.Fragment>
                <div className = "graphRow">
                    <div className = "barCol">
                        <BarGraph dimensions = {['500px', '300px']} title = "Class Sizes" data = {this.classSizeData()} xLabel = "Class Size" yLabel = "Class Id"/>     
                    </div>
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Subjects" data = {this.classSubjectData()}/>
                    </div>
                </div>
                <div className = "graphRow">
                    <div className = "lineCol">
                        <ScatterGraph dimensions = {['100%', '500px']} data = {this.scatterData()}/>   
                    </div>
                </div>
            </React.Fragment>
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

export default connect(mapStateToProps, {getAllStudentCourses, getStudentGroups, getCourses})(CourseSection)