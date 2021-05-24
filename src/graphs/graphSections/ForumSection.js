import React from 'react'
import ScatterGraph from '../ScatterGraph'
import BarGraph from '../BarGraph'
import PieGraph from '../PieGraph'
import { connect } from 'react-redux'
import { getForums, getPosts } from '../../actions'

class ForumSection extends React.Component {

    async componentDidMount(){
        await this.props.getPosts()
        await this.props.getForums()
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
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        forums: state.forums.currentForums,
        posts: state.posts.currentPosts
    }
}

export default connect(mapStateToProps, { getForums, getPosts })(ForumSection)