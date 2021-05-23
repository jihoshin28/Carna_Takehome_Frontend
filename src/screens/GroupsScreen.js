import React from 'react'
import { connect } from 'react-redux'
import {getGroups} from '../actions'
import GroupSection from '../components/GroupSection'
import Section from '../components/Section'
import Filter from '../components/Filter'
import Sort from '../components/Sort'

class GroupsScreen extends React.Component {

    constructor(props){
        super()
        this.state = {
            groups: props.groups
        }
    }

    componentDidMount(){
        this.props.getGroups()
        console.log(this.props.groups)
    }

    sort = (value) => {
        console.log(value)
        let sorted
        if(value === 'Name'){
            sorted = this.props.groups.sort((a,b) => {
                return a.name.localeCompare(b.name);
            })
        } else if(value === 'Type'){
            sorted = this.props.groups.sort((a,b) => {
                return a.type.localeCompare(b.type);
            })
        } 
        console.log(sorted)
        this.setState({
            groups: sorted
        })
    }

    filter = (value) => {
        let filtered
        if(value === 'Social'){
            filtered = this.props.groups.filter((group) => {
                return group.type === 'social'
            })
        } else if(value === 'Interest'){
            filtered = this.props.groups.filter((group) => {
                return group.type === 'interest'
            })
        } else if(value === 'Class'){
            filtered = this.props.groups.filter((group) => {
                return group.type === 'class'
            })
        } 
        this.setState({
            groups: filtered
        })
    }

    render(){
        return(
            <div>
                <h1 class = "screenHeader">Groups Screen</h1>
                <div class = "row filter-sort-row">
                    <div class = "col-6">
                        <Filter options = {['Social', 'Interest', 'Class']} filter = {this.filter}/>
                    </div>
                    <div class = "col-6">
                        <Sort options = {['Name', 'Type']} sort = {this.sort}/>
                    </div>
                </div>
                {this.state.groups.map(group => {
                    console.log(group)
                    return (
                        <Section>
                            <GroupSection name = {group.name} type = {group.type} imageURL = {group.image} /> 
                        </Section>
                    )
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