import React from 'react'
import ScatterGraph from '../ScatterGraph'
import BarGraph from '../BarGraph'
import PieGraph from '../PieGraph'
import { connect } from 'react-redux'
import {getGroups} from '../../actions'

class GroupSection extends React.Component {

    async componentDidMount(){
        await this.props.getGroups()
    }

    groupSizeData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let groups = {}
        this.props.groups.forEach(group => {
            if(groups[group.id]){
                groups[group.id] += group.students.length
            } else {
                groups[group.id] = group.students.length
            }
        })
        
        let keys = Object.keys(groups)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(groups[keys[i]])
            data.push(array)
        }
        return data
    }

    groupTypeData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let groups = {}
        this.props.groups.forEach(group => {
            if(groups[group.type]){
                groups[group.type] += group.students.length
            } else {
                groups[group.type] = group.students.length
            }
        })
        let keys = Object.keys(groups)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(groups[keys[i]])
            data.push(array)
        }
        return data
    }

    render(){
        console.log(this.groupSizeData(), "GROUP SIZE")
        return(
            <React.Fragment>
                <div className = "graphRow">
                    <div className = "barCol">
                        <BarGraph dimensions = {['500px', '300px']} title = "Group Size" data = {this.groupSizeData()} xLabel = "Group Size" yLabel = "Group Id"/>     
                    </div>
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Group Types" data = {this.groupTypeData()}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups.currentGroups
    }
}

export default connect(mapStateToProps, {getGroups})(GroupSection)