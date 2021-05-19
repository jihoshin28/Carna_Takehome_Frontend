import React from 'react'

class UserSection extends React.Component{
    
    render(){
        return(
            <div class="section">
                <div class="sectionHeader">
                    <h3>User</h3>
                </div>

                <div class="sectionInfo">
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
                <div class="sectionButtonBox">
                    <button onClick = {() => console.log('see details')} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}User Details
                    </button>
                    <button onClick = {() => console.log('modify')} class="btn btn-warning sectionButton">
                        {/* {this.props.orderButtonTxt} */}Modify User
                    </button>
                    <button onClick = {() => console.log('delete')} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete User
                    </button>

                </div>

            </div>
        )
    }
}

export default UserSection