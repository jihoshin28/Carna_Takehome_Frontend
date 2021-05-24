import React from 'react'
import { connect } from 'react-redux'
import ClassSection from '../admin_sections/CourseAdmin'
import GroupSection from '../admin_sections/GroupAdmin'
import ForumSection from '../admin_sections/ForumAdmin'

class AdminScreen extends React.Component {

    renderSection(){
        let graphType = this.props.graphType
        if(graphType === "course"){
            return <ClassSection/>
        } else if (graphType === "group"){
            return <GroupSection/>
        } else if (graphType === "forum"){
            return <ForumSection/>
        }
    }

    render(){
        console.log(this.props.graphType)
        return(
            <div>
                <div className = "container">
                    {this.renderSection()}
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        graphType: state.teachers.graphType
    }
    
}

export default connect(mapStateToProps, {})(AdminScreen)