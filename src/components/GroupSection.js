import React from 'react'

class GroupSection extends React.Component{
    
    render(){
        return(
            <div class="section">
                <div class="sectionHeader">
                    <h3>Group</h3>
                </div>

                <div class="sectionInfo">
                    <p>
                        Name of Group: {this.props.name}
                    </p>
                    <p>
                        Group Type: {this.props.type}
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => console.log('see details')} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}Group Details
                    </button>
                    <button onClick = {() => console.log('modify')} class="btn btn-warning sectionButton">
                        {/* {this.props.orderButtonTxt} */}Modify Group
                    </button>
                    <button onClick = {() => console.log('delete')} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete Group
                    </button>

                </div>

            </div>
        )
    }
}

export default GroupSection