import React from 'react'
import { connect } from 'react-redux'
import { getCourse, getGroup, removeStudentGroup, removeStudentCourse } from '../actions'
import Section from '../components/Section'
import StudentListSection from '../components/StudentListSection'


class StudentsListScreen extends React.Component{

    async componentDidMount(){
        console.log("hi")
        let params = this.props.match.params
        if(params.group_type === "course"){
            await this.props.getCourse(params.id)
        } else if(params.group_type === "group"){
            await this.props.getGroup(params.id)
        }

    }

    renderStudentList = (group) => {
        if(group === "course"){
            console.log(this.props)
            return this.props.selectedCourse.students.map(student => {
                return(
                    <Section>
                        <StudentListSection course_id = {this.props.selectedCourse.id} list = "course" student_id = {student.id} history = {this.props.history} imageURL = {student.image} firstName = {student.first_name} lastName = {student.last_name} email = {student.email} city = {student.city} state = {student.state}/> 
                    </Section>
                ) 
            })
            
        } else if(group === "group"){
            console.log(this.props)
            return this.props.selectedGroup.students.map(student => {
                return(
                    <Section>
                        <StudentListSection group_id = {this.props.selectedGroup.id} list = "group" student_id = {student.id} history = {this.props.history} imageURL = {student.image} firstName = {student.first_name} lastName = {student.last_name} email = {student.email} city = {student.city} state = {student.state}/> 
                    </Section>
                ) 
            })
        }
           
    }

    render(){

        return(
            <div>
                <h1 class = "screenHeader">Students Screen</h1>
                {this.renderStudentList(this.props.match.params.group_type)}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        selectedCourse: state.courses.selectedCourse,
        selectedGroup: state.groups.selectedGroup
    }
}

export default connect(mapStateToProps, {getCourse, getGroup})(StudentsListScreen)