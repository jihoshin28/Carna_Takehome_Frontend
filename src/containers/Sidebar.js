import React from 'react'
import { Link } from 'react-router-dom'
// import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render(){
        return(            
            <div class="sidebar" id="navbarNav">
                <div class='sidebar-logo' >
                    <img src = {`${process.env.PUBLIC_URL}/admin_panel_logo.png`}/>
                    Carna Admin Panel
                </div>
                
                <Link to = "/" class="sidebar-link">
                    Admin
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

                <Link to = "/students" class="sidebar-link">
                    Students
                </Link>

                <Link to = "/teachers" class="sidebar-link">
                    Teachers
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