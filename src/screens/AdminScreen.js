import React from 'react'
import { connect } from 'react-redux'
import { getGraphSetting } from '../actions'
import ClassSection from '../graphs/graphSections/CourseSection'
import GroupSection from '../graphs/graphSections/GroupSection'
import ForumSection from '../graphs/graphSections/ForumSection'

class AdminScreen extends React.Component {

    async componentDidMount(){
        await this.props.getGraphSetting()
    }

    render(){
        return(
            <div>
                <h1 class = "screenHeader">Admin</h1>
                <div className = "container">
                    <ClassSection/>
                    <GroupSection/>
                    <ForumSection/>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses.currentCourses, 
        studentCourses: state.courses.allStudentCourses,
        studentGroups: state.groups.allStudentGroups
    }
    
}

export default connect(mapStateToProps, {getGraphSetting})(AdminScreen)