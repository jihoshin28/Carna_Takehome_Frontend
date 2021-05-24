import React from 'react'
import {removeStudentCourse, removeStudentGroup} from '../actions'
import {connect} from 'react-redux'

class StudentListSection extends React.Component{
    
    renderButtons = (type) => {
        if(type === "group"){
            return(
                <div class="sectionButtonBox">
                    <button onClick = {() => this.props.removeStudentGroup(this.props.group_id, this.props.student_id)} class = "btn btn-danger sectionButton">
                        Remove From Group
                    </button>
                </div>
            )
        } else if(type === "course"){
            return(
                <div class="sectionButtonBox">
                    <button onClick = {() => this.props.history.push(`/student_progress/${this.props.course_id}/${this.props.student_id}`)} class="btn btn-primary sectionButton">
                        Student Progress
                    </button>
                    <button onClick = {() => this.props.removeStudentCourse(this.props.course_id, this.props.student_id)} class="btn btn-danger sectionButton">
                        Remove From Course
                    </button>
                </div>
            )
        }
    }

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
                
                    {this.renderButtons(this.props.list)}

            </div>
        )
    }
}

export default connect(null, {removeStudentGroup, removeStudentCourse})(StudentListSection)