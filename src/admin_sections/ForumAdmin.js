import React from 'react'
import ScatterGraph from '../graphs/ScatterGraph'
import BarGraph from '../graphs/BarGraph'
import PieGraph from '../graphs/PieGraph'
import { connect } from 'react-redux'
import { getForums, getPosts, createForum } from '../actions'

class ForumSection extends React.Component {

    constructor(){
        super()
        this.state = {
            formData: {}
        }
    }

    async componentDidMount(){
        await this.props.getPosts()
        await this.props.getForums()
    }

    formOnChange = (e) => {
        let newState = {...this.state}
        newState.formData[e.target.id] = e.target.value
        this.setState(newState)
        console.log(this.state)
    }

    formOnSubmit = (e) => {
        e.preventDefault()
        let formState = this.state.formData
        if(!formState.type || !formState.name || !formState.image) {
            alert("Please complete the form!")
        } else {
            this.props.createForum(this.state.formData)
        }
    }

    renderGroupOptions = () => {
        let groupOptions = this.props.groups.map(group => {
            return <option value= {group.id}>{group.name}</option>
        })
        return <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Select Group</label>
                <select onChange = {this.formOnChange} class="form-select" id="group_id" >
                    <option selected>Choose...</option>
                    {groupOptions}
                </select>
        </div>
    }

    forumPostsData = () => {
        let data = [['Forum Id', 'Number of Posts']]
        let forums = {}
        this.props.forums.forEach((forum) => {
            if(forums[forum.id]){
                forums[forum.id] += forum.posts.length
            } else {
                forums[forum.id] = forum.posts.length
            }
        })
        let keys = Object.keys(forums)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(forums[keys[i]])
            data.push(array)
        }
        return data
    }

    forumTypeData = () => {
        let data = [['Type', 'Number of Forums']]
        let forums = {}
        this.props.forums.forEach((forum) => {
            if(forums[forum.type]){
                forums[forum.type] += 1
            } else {
                forums[forum.type] = 1
            }
        })
        let keys = Object.keys(forums)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(forums[keys[i]])
            data.push(array)
        }
        return data
    }

    scatterData = () => {
        let data = [['Completion', 'Score']]
        this.props.studentCourses.forEach((studentCourse) => {
            data.push([studentCourse.completion, studentCourse.score])
        })
        return data
    }

    render(){
        console.log(this.forumPostsData())
        return(
            <React.Fragment>
                <div className = "graphRow">
                    <div className = "barCol">
                        <BarGraph dimensions = {['500px', '300px']} title = "Forum Posts" data = {this.forumPostsData()} yLabel = 'Forum Id' xLabel ='Number of Posts'/>     
                    </div>
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Forum Types" data = {this.forumTypeData()}/>
                    </div>
                </div>
                <div class = "postSection">
                    <h3 class = "postSectionHeader">Create new Forum</h3>
                    {this.renderGroupOptions()}
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Forum Type</label>
                            <select onChange = {this.formOnChange} class="form-select" id="type" >
                                <option selected>Choose...</option>
                                <option value="public">Public</option>
                                <option value="Q&A">Q&A</option>
                                <option value="discuss">Discuss</option>
                            </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input id = "name" onChange = {this.formOnChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Image URL</span>
                        <input id = "image" onChange = {this.formOnChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <button onClick = {this.formOnSubmit} class = "postButton btn btn-primary" >Create Forum</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        forums: state.forums.currentForums,
        posts: state.posts.currentPosts,
        groups: state.groups.currentGroups
    }
}

export default connect(mapStateToProps, { getForums, getPosts, createForum })(ForumSection)