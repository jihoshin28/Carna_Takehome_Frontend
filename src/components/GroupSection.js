import React from 'react'
import { connect } from 'react-redux'
import { deleteGroup } from '../actions'

class GroupSection extends React.Component{
    
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
                        Group Name: {this.capitalize(this.props.name)}
                    </p>
                    <p>
                        Type: {this.capitalize(this.props.type)}
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => this.props.history.push(`/student_list/group/${this.props.group_id}`)} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}Student List
                    </button>
                    <button onClick = {() => this.props.deleteGroup(this.props.group_id)} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete Group
                    </button>

                </div>

            </div>
        )
    }
}

export default connect(null, {deleteGroup})(GroupSection)