import React from 'react'
import { Link } from 'react-router-dom'
// import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render(){
        return(            
            <div class="toolbar" id="navbarNav">
                <Link class = 'toolbar-link' to = "/settings" class="toolbar-link">
                    <img class = 'toolbar-icon' src = {`${process.env.PUBLIC_URL}/settings_icon.png`}/>
                </Link>
            
                <Link class = 'toolbar-link' to = "/profile" class="toolbar-link">
                    <img class = 'toolbar-icon' src = {`${process.env.PUBLIC_URL}/profile_icon.png`}/>
                </Link>

                <Link class = 'toolbar-link' to = "/auth" class="toolbar-link">
                    <img class = 'toolbar-icon' src = {`${process.env.PUBLIC_URL}/sign_out_icon.png`}/>
                </Link>
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return({
        state: state
    })
}

export default connect(mapStateToProps, {})(Navbar) 