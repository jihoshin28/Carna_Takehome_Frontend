import React from 'react'

class CourseSection extends React.Component{
    
    render(){
        return(
            <div class="userSection">
                <div class="userHeader">
                    <h3>Course</h3>
                </div>

                <div class="userSection-info">
                    <p>
                        {/* Order Cost: ${(this.props.total/100).toFixed(2)} */}
                    </p>
                    <p>
                        Name of User: Bob Clark
                    </p>
                    <p>
                        Grocery Store:
                    </p>
                </div>
                <div class="userButtonBox">
                    <button onClick = {() => console.log('see details')} class="btn btn-primary userSectionDetails">
                        {/* {this.props.paymentText} */}See User Details
                    </button>
                    <button onClick = {() => console.log('modify')} class="btn btn-warning userSectionDetails">
                        {/* {this.props.orderButtonTxt} */}Modify User
                    </button>
                    <button onClick = {() => console.log('delete')} class="btn btn-danger userSectionDetails">
                        {/* {this.props.orderButtonTxt} */}Delete User
                    </button>

                </div>

            </div>
        )
    }
}

export default CourseSection