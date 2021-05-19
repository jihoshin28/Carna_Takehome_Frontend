import React from 'react'
import { Link } from 'react-router-dom'
// import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render(){
        return(            
            <div class="sidebar" id="navbarNav">
                <Link class='sidebar-logo' to= '/' >
                    <img src = {`${process.env.PUBLIC_URL}/admin_panel_logo.png`}/>
                    Carna Admin Panel
                </Link>
                
                <Link to = "/calendar" class="sidebar-link">
                    Calendar
                </Link>
                
                <Link to = "/charts" class="sidebar-link">
                    Charts
                </Link>
                
                <Link to = "/courses" class="sidebar-link">
                    Courses
                </Link>
            
                <Link to = '/forums' class="sidebar-link">
                    Forums
                </Link>

                <Link to = '/groups' class="sidebar-link">
                    Groups
                </Link>

                <Link to = "/users" class="sidebar-link">
                    Users
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