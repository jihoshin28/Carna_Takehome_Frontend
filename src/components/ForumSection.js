import React from 'react'

class ForumSection extends React.Component{
    
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        return(
            <div class="section">
                <div class="sectionHeader">
                    <h3>Forum</h3>
                </div>

                <div class="sectionInfo">
                    <p>
                        Name of Group: {this.capitalize(this.props.name)}
                    </p>
                    <p>
                        {/* Group Type: {this.capitalize(this.props.type)} */}
                    </p>
                </div>
                <div class="sectionButtonBox">
                    <button onClick = {() => console.log('see details')} class="btn btn-primary sectionButton">
                        {/* {this.props.paymentText} */}Forum Details
                    </button>
                    <button onClick = {() => console.log('modify')} class="btn btn-warning sectionButton">
                        {/* {this.props.orderButtonTxt} */}Modify Forum
                    </button>
                    <button onClick = {() => console.log('delete')} class="btn btn-danger sectionButton">
                        {/* {this.props.orderButtonTxt} */}Delete Forum
                    </button>

                </div>

            </div>
        )
    }
}

export default ForumSection