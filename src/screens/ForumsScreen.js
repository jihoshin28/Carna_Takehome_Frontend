import React from 'react'
import { connect } from 'react-redux'
import {getForums, deleteForum } from '../actions'
import ForumSection from '../components/ForumSection'
import Section from '../components/Section'
import Filter from '../components/Filter'
import Sort from '../components/Sort'

class ForumsScreen extends React.Component {

    constructor(props){
        super()
        this.state = {
            forums: props.forums
        }
    }

    async componentDidMount(){
        await this.props.getForums()
        console.log(this.props.forums)
        this.setState({
            formus: this.props.forums
        })
    }

    sort = (value) => {
        console.log(value)
        let sorted
        if(value === 'Name'){
            sorted = this.props.forums.sort((a,b) => {
                return a.name.localeCompare(b.name);
            })
        } else if(value === 'Type'){
            sorted = this.props.forums.sort((a,b) => {
                return a.type.localeCompare(b.type);
            })
        } 
        console.log(sorted)
        this.setState({
            forums: sorted
        })
    }

    filter = (value) => {
        let filtered 
        if(value === 'Q&A'){
            filtered = this.props.forums.filter((forum) => {
                return forum.type === 'Q&A'
            })
        } else if(value === 'Public'){
            filtered = this.props.forums.filter((forum) => {
                return forum.type === 'public'
            })
        } else if(value === 'Discuss'){
            filtered = this.props.forums.filter((forum) => {
                return forum.type === 'discuss'
            })
        } 
        this.setState({
            forums: filtered
        })
    }

    delete = (forum_id) => {
        this.props.deleteForum(forum_id)
        let newForumState = this.state.forums.filter(forum => forum.id !== forum_id)
        this.setState({
            forums: newForumState
        })
    }

    render(){
        return(
            <div>
                <h1 class = "screenHeader">Forums Screen</h1>
                <div class = "row filter-sort-row">
                    <div class = "col-6">
                        <Filter options = {['Q&A', 'Public', 'Discuss']}filter = {this.filter}/>
                    </div>
                    <div class = "col-6">
                        <Sort options = {['Name', 'Type']}sort = {this.sort}/>
                    </div>
                </div>
                {this.state.forums.map(forum => {
                    console.log(forum)
                    return (
                        <Section>
                            <ForumSection delete = {this.delete} forum_id = {forum.id} history = {this.props.history} name = {forum.name} type = {forum.type} imageURL = {forum.image}/> 
                        </Section>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        forums: state.forums.currentForums
    }
}

export default connect(mapStateToProps, {getForums, deleteForum })(ForumsScreen)