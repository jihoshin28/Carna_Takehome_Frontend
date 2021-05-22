import React from 'react'
import { connect } from 'react-redux'
import {getTeachers} from '../actions'
import TeacherSection from '../components/TeacherSection'
import Section from '../components/Section'

class TeachersScreen extends React.Component {
    componentDidMount(){
        this.props.getTeachers()
        console.log(this.props.teachers)
    }
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Teachers Screen</h1>
                {this.props.teachers.map(teacher => {
                    console.log(teacher)
                    return (
                        <Section>
                            <TeacherSection imageURL = {teacher.image} firstName = {teacher.first_name} lastName = {teacher.last_name} email = {teacher.email}/> 
                        </Section>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teachers: state.teachers.currentTeachers
    }
}

export default connect(mapStateToProps, {getTeachers})(TeachersScreen)