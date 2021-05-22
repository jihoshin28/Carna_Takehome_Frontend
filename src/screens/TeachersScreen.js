import React from 'react'
import { connect } from 'react-redux'
import TeacherSection from '../components/TeacherSection'

class TeachersScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Teachers Screen</h1>
                <TeacherSection />
                <TeacherSection />
                <TeacherSection /> 
            </div>
        )
    }
}

export default TeachersScreen