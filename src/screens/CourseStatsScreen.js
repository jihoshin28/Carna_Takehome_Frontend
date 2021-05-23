import React from 'react'
import { connect } from 'react-redux'
import { getCourse, getGroup } from '../actions'

class CourseStatsScreen extends React.Component{

    componentDidMount(){
        let params = this.props.match.params
        this.props.getCourse(params.id)
    }

    render(){
        return(
            <div> 
                <h1>Students List</h1>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        selectedCourse: state.courses.selectedCourse,
        selectedGroup: state.groups.selectGroup
    }
}

export default connect(mapStateToProps, {getCourse, getGroup})(CourseStatsScreen)