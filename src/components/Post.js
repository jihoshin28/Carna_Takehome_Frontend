import React from 'react'

class Post extends React.Component {

    render(){
        return(
            <div class="post">
                <div class = "postTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <div class = "postContent">
                    <p>{this.props.content}</p>

                </div>
                
                <div class = "postDate">
                    <p>{this.props.createdAt}</p>
                </div>
            </div>
        )
    }

}

export default Post