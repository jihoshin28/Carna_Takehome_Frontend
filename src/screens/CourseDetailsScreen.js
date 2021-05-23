import React from 'react'
import { connect } from 'react-redux'
import PieGraph from '../graphs/PieGraph'
import BarGraph from '../graphs/BarGraph'
import { getCourse, getGroup } from '../actions'

class CourseDetailsScreen extends React.Component{

    componentDidMount(){
        let params = this.props.match.params
        this.props.getCourse(params.id)
        console.log(this.props.selectedCourse)
    }

    render(){
        return(
            <div> 
                <h1 class = "screenHeader">Course Details</h1>
                <div className = "graphRow">
                    <div className = "pieCol">
                        <PieGraph/>     
                    </div>
                    <div className = "pieCol">
                        <PieGraph/>
                    </div>
                </div>
                <div className = "graphRow">
                    <div className = "lineCol">
                        <BarGraph />
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        selectedCourse: state.courses.selectedCourse
    }
}

export default connect(mapStateToProps, {getCourse})(CourseDetailsScreen)