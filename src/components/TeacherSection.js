import React from 'react'

class TeacherSection extends React.Component{
    
    render(){
        return(
            <div class="section">
                <div class="sectionHeader">
                    <h3>Teacher</h3>
                </div>

                <div class="sectionInfo">
                    <p>
                        {/* Order Cost: ${(this.props.total/100).toFixed(2)} */}
                    </p>
                    <p>
                        Name of Teacher: Bob Clark
                    </p>
                    <p>
                        Grocery Store:
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => console.log('see details')} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}Teacher Details
                    </button>
                    <button onClick = {() => console.log('modify')} class="btn btn-warning sectionButton">
                        {/* {this.props.orderButtonTxt} */}Modify Teacher
                    </button>
                    <button onClick = {() => console.log('delete')} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete Teacher
                    </button>

                </div>

            </div>
        )
    }
}

export default TeacherSection