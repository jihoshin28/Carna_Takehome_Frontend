import React from 'react'
import { connect } from 'react-redux'
import ForumSection from '../components/ForumSection'

class ForumScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Forums Screen</h1>
                <ForumSection />
                <ForumSection />
                <ForumSection /> 
            </div>
        )
    }
}

export default ForumScreen