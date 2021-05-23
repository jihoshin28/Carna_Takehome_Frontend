import React from 'react'
import {connect} from 'react-redux'
import { getForum } from '../actions'
import Post from '../components/Post'

class ForumScreen extends React.Component{
    async componentDidMount(){
        let params = this.props.match.params
        await this.props.getForum(params.id)
        console.log(this.props.selectedForum)
    }

    render(){
        return(
            <div>
                <h1 class = "screenHeader">Forum Screen</h1>
                {this.props.selectedForum.posts.map(post => {
                    return <Post title ={post.title} content = {post.content} createdAt = {post.createdAt}/>
                })}

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        selectedForum: state.forums.selectedForum
    }
}

export default connect(mapStateToProps, {getForum})(ForumScreen)