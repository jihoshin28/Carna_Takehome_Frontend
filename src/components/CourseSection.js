import React from 'react'

class CourseSection extends React.Component{
    
    render(){
        return(
            <div class="section">
                <div class="sectionHeader">
                    <img class = "avatar-pic" src = {this.props.imageURL} alt = "avatar"></img> 
                </div>

                <div class="sectionInfo">
                    <p>
                        Subject: {this.props.subject}
                    </p>
                    <p>
                        Class Size: {this.props.numberEnrolled}
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => this.props.history.push(`/student_list/course/${this.props.course_id}`)} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}Student List
                    </button>
                    <button onClick = {() => this.props.history.push(`/course_stats/${this.props.course_id}`)} class="btn btn-warning sectionButton">
                        {/* {this.props.orderButtonTxt} */}Course Stats
                    </button>
                    <button onClick = {() => console.log('delete')} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete Course
                    </button>

                </div>

            </div>
        )
    }
}

export default CourseSection