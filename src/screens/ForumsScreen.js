import React from 'react'
import { connect } from 'react-redux'
import {getForums} from '../actions'
import ForumSection from '../components/ForumSection'

class ForumsScreen extends React.Component {
    componentDidMount(){
        this.props.getForums()
        console.log(this.props.forums)
    }
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Forums Screen</h1>
                {this.props.forums.map(forum => {
                    console.log(forum)
                    return <ForumSection name = {forum.name} type = {forum.type} /> 
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

export default connect(mapStateToProps, {getForums})(ForumsScreen)