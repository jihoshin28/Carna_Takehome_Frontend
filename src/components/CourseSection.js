import React from 'react'

class CourseSection extends React.Component{
    
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        return(
            <div class="section">
                <div class="sectionHeader">
                    <img class = "avatar-pic" src = {this.props.imageURL} alt = "avatar"></img> 
                </div>

                <div class="sectionInfo">
                    <p>
                        Subject: {this.capitalize(this.props.subject)}
                    </p>
                    <p>
                        Class Size: {this.props.numberEnrolled}
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => this.props.history.push(`/student_list/course/${this.props.course_id}`)} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}Student List
                    </button>
                    <button onClick = {() => this.props.history.push(`/course_details/${this.props.course_id}`)} class="btn btn-warning sectionButton">
                        {/* {this.props.orderButtonTxt} */}Course Details
                    </button>
                    <button onClick = {() => this.props.delete(this.props.course_id)} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete Course
                    </button>

                </div>

            </div>
        )
    }
}

export default CourseSection