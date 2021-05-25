import React from 'react'
import { Link } from 'react-router-dom'
// import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render(){
        return(            
            
            <div class="sidebar" id="navbarNav">
                {
                    this.props.loggedIn? 
                    <React.Fragment>
                        <Link to = "/" class='sidebar-logo' >
                        <img src = {`${process.env.PUBLIC_URL}/admin_panel_logo.png`}/>
                        Carna Admin Panel
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
                    </React.Fragment>
                    :
                    <React.Fragment>

                        <Link to = "/" class='sidebar-logo' >
                            <img src = {`${process.env.PUBLIC_URL}/admin_panel_logo.png`}/>
                            Carna Admin Panel
                        </Link>

                        <Link to = "/auth" class="sidebar-link">
                            Sign in
                        </Link>
                    </React.Fragment>

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

export default connect(mapStateToProps, {})(Navbar) 