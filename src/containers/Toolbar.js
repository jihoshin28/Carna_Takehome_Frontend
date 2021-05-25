import React from 'react'
import { Link } from 'react-router-dom'
// import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'
import {signOut } from '../actions'

class Navbar extends React.Component {

    signOut = () => {
        this.props.signOut()
        this.props.history.push('/')
    }

    render(){
        console.log(this.props.loggedIn)
        return(            
            <div class="toolbar" id="navbarNav">
                {
                    this.props.loggedIn? 
                    <React.Fragment>
                        <Link onClick = {this.signOut}class = 'toolbar-link' to = "/auth" class="toolbar-link">
                            <img class = 'toolbar-icon' src = {`${process.env.PUBLIC_URL}/sign_out_icon.png`}/>
                        </Link>
                        
                        <Link class = 'toolbar-link' to = "/settings" class="toolbar-link">
                            <img class = 'toolbar-icon' src = {`${process.env.PUBLIC_URL}/settings_icon.png`}/>
                        </Link>

                    </React.Fragment>
                    :
                    null

                }
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return({
        loggedIn: state.teachers.loggedIn
    })
}

export default connect(mapStateToProps, {signOut})(Navbar) 