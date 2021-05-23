import React from 'react'
import { connect } from 'react-redux'
import {deleteStudent} from '../actions'

class StudentSection extends React.Component{
    
    render(){
        return(
            <div class="section">
                <div class="sectionHeader">
                    <img class = "avatar-pic" src = {this.props.imageURL} alt = "avatar"></img> 
                </div>

                <div class="sectionInfo">
                    <p>
                        Name: {this.props.firstName} {this.props.lastName}
                    </p>
                    <p>
                        Location: {this.props.city}, {this.props.state}
                    </p>
                    <p>
                        Email: {this.props.email}
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => this.props.history.push(`/details/student/${this.props.student_id}`)} class="btn btn-primary sectionButton">
                        Student Details
                    </button>
                    <button onClick = {() => this.props.history.push(`/contact/student/${this.props.student_id}`)} class="btn btn-warning sectionButton">
                        Contact Student
                    </button>
                    <button onClick = {() => this.props.deleteStudent(this.props.student_id)} class="btn btn-danger sectionButton">
                        Delete Student
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, {deleteStudent})(StudentSection)