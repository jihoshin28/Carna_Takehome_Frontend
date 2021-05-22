import React from 'react'
import { connect } from 'react-redux'
import {getStudents} from '../actions'
import StudentSection from '../components/StudentSection'
import Section from '../components/Section'

class StudentsScreen extends React.Component {
    componentDidMount(){
        this.props.getStudents()
        console.log(this.props.students)
    }
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Students Screen</h1>
                {this.props.students.map(student => {
                    console.log(student)
                    return(
                        <Section>
                            <StudentSection imageURL = {student.image} firstName = {student.first_name} lastName = {student.last_name} email = {student.email}/> 
                        </Section>
                    ) 
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students.currentStudents
    }
}

export default connect(mapStateToProps, {getStudents})(StudentsScreen)