import React from 'react'
import { connect } from 'react-redux'
import PieGraph from '../graphs/PieGraph'
import BarGraph from '../graphs/BarGraph'
import { getCourse, courseStudentsInfo } from '../actions'

class CourseDetailsScreen extends React.Component{
    
    async componentDidMount(){
        let course_id = this.props.match.params.id
        let result = await this.props.courseStudentsInfo(course_id)
        console.log(this.props.courseStudents, course_id)
    }

    completionPercentage = () => {
        let data = [
            ['Range', 'Completion Percentage'],
            ["0 - 20%", 0],
            ["20 - 40%", 0],
            ["40 - 60%", 0],
            ["60 - 80%", 0],
            ["80 - 100%", 0]
        ]
        this.props.courseStudents.forEach((studentCourse) => {
            let completion = studentCourse.completion
            if(completion > 0 && completion <= 20){
                data[1][1] += completion
            } else if (completion > 20 && completion <= 40){
                data[2][1] += completion
            } else if (completion > 40 && completion <= 60){
                data[3][1] += completion
            } else if (completion > 60 && completion <= 80){
                data[4][1] += completion
            } else if (completion > 80 && completion <= 100){
                data[5][1] += completion
            }
        })
        return data
    }

    studentScores = () => {
        let data = [
            ['Range', 'Completion Percentage'],
            ["0 - 20%", 0],
            ["20 - 40%", 0],
            ["40 - 60%", 0],
            ["60 - 80%", 0],
            ["80 - 100%", 0]
        ]
        this.props.courseStudents.forEach((studentCourse) => {
            let score = studentCourse.score
            if(score > 0 && score <= 20){
                data[1][1] += score
            } else if (score > 20 && score <= 40){
                data[2][1] += score
            } else if (score > 40 && score <= 60){
                data[3][1] += score
            } else if (score > 60 && score <= 80){
                data[4][1] += score
            } else if (score > 80 && score <= 100){
                data[5][1] += score
            }
        })
        return data
    }

    studentsBarGraphData = () => {
        let data = [['Student', 'Completion', 'Scores']]
        this.props.courseStudents.forEach((studentCourse) => {
            let array = []
            let studentName = this.props.students.find(student => {
                return studentCourse.student_id === student.id
            }).first_name
            array.push(studentName)
            array.push(studentCourse.completion)
            array.push(studentCourse.score)
            data.push(array)
        })
        return data
    }

    render(){
        console.log(this.studentsBarGraphData())
        return(
            <div> 
                <h1 class = "screenHeader">Course Details</h1>
                <div className = "graphRow">
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Students Completion %" data = {this.completionPercentage()}/>     
                    </div>
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Students Scores" data = {this.studentScores()}/>
                    </div>
                </div>
                <div className = "graphRow">
                    <div className = "lineCol">
                        <BarGraph dimensions = {['100%', '500px']} data = {this.studentsBarGraphData()}/>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        courseStudents: state.courses.currentCourseStudents,
        students: state.students.currentStudents
    }
}

export default connect(mapStateToProps, {getCourse, courseStudentsInfo })(CourseDetailsScreen)