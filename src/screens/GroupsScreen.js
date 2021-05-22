import React from 'react'
import { connect } from 'react-redux'
import {getGroups} from '../actions'
import GroupSection from '../components/GroupSection'

class GroupsScreen extends React.Component {
    componentDidMount(){
        this.props.getGroups()
        console.log(this.props.groups)
    }
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Groups Screen</h1>
                {this.props.groups.map(group => {
                    console.log(group)
                    return <GroupSection name = {group.name} type = {group.type} /> 
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups.currentGroups
    }
}

export default connect(mapStateToProps, {getGroups})(GroupsScreen)