import React from 'react'

class StudentSection extends React.Component{
    
    render(){
        return(
            <div class="section">
                <div class="sectionHeader">
                    <img class = "avatar-pic" src = {this.props.imageURL} alt = "avatar"></img> 
                </div>

                <div class="sectionInfo">
                    <p>
                        First Name: {this.props.firstName}
                    </p>
                    <p>
                        Last Name: {this.props.lastName}
                    </p>
                    <p>
                        Email: {this.props.email}
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => console.log('see details')} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}Student Details
                    </button>
                    <button onClick = {() => console.log('modify')} class="btn btn-warning sectionButton">
                        {/* {this.props.orderButtonTxt} */}Modify Student
                    </button>
                    <button onClick = {() => console.log('delete')} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete Student
                    </button>

                </div>

            </div>
        )
    }
}

export default StudentSection