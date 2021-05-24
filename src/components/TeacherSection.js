import React from 'react'
import { connect } from 'react-redux'
import { deleteTeacher} from '../actions'

class TeacherSection extends React.Component{
    
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
                    <button onClick = {() => this.props.history.push(`/contact/teacher/${this.props.teacher_id}`)} class="btn btn-primary sectionButton">
                        Contact Teacher
                    </button>
                    <button onClick = {() => this.props.deleteTeacher(this.props.teacher_id)} class="btn btn-danger sectionButton">
                        Delete Teacher
                    </button>

                </div>

            </div>
        )
    }
}

export default connect(null, {deleteTeacher})(TeacherSection)