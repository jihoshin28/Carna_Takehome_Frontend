import React from 'react'
import { deleteForum } from '../actions'
import { connect } from 'react-redux'

class ForumSection extends React.Component{
    
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
                        Name: {this.capitalize(this.props.name)}
                    </p>
                    <p>
                        Type: {this.capitalize(this.props.type)}
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => this.props.history.push(`/forum/${this.props.forum_id}`)} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}Forum
                    </button>
                    <button onClick = {() => this.props.deleteForum(this.props.forum_id)} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete Forum
                    </button>

                </div>

            </div>
        )
    }
}

export default connect(null, { deleteForum })(ForumSection)