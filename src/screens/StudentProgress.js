import React from 'react'
import { connect } from 'react-redux'
import PieGraph from '../graphs/PieGraph'
import { getStudentCourse } from '../actions'

class StudentProgressScreen extends React.Component{

    componentDidMount(){
        let params = this.props.match.params
        this.props.getStudentCourse(params.course_id, params.student_id)
    }

    render(){
        let student = this.props.courseStudent
        return(
            <div> 
                <h1 class = "screenHeader">Student Progress</h1>
                <div className = "graphRow">
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Completion" data = {[['a','b'],['Complete', student.completion ], ['Incomplete', 100 - student.completion]]}/>    
                    </div>
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Student Score" data = {[['a','b'],['Student Score', student.score ], ['Out of 100', 100 - student.score]]}/>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        courseStudent: state.courses.selectedCourseStudent
    }
}

export default connect(mapStateToProps, {getStudentCourse})(StudentProgressScreen)