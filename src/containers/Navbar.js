import React from 'react'
import { Link } from 'react-router-dom'
// import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-expand-med navbar-expand-sm nav-bg">
            
                   
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="sidebar" id="navbarNav">
                    <Link class='sidebar-logo' to= '/' >
                        <img src = {`${process.env.PUBLIC_URL}/admin_panel_logo.png`}/>
                        Carna Admin Panel
                    </Link>
                    
                    <Link to = "/courses" class="sidebar-link">
                        Courses
                    </Link>
                
                    <Link to = "/charts" class="sidebar-link">
                        Charts
                    </Link>
                
                    <Link to = "/users" class="sidebar-link">
                        Users
                    </Link>
                
                    <Link to = "/calendar" class="sidebar-link">
                        Calendar
                    </Link>

                    <Link to = '/forums' class="sidebar-link">
                        Forums
                    </Link>
                        
                </div>
                    {/* {(!!this.props.signedIn) ?
                    
                    <ul class="navbar-nav">
                        <li class="nav-item nav-list active">
                            <Link to = "/orderpage" class="menu-button">
                                Order
                            </Link>
                        </li>
                            
                        {(!isEmpty(this.props.activeOrders)) ? 
                                <li class="nav-item nav-list">
                                    <Link to = "/active_orders" class="menu-button">Active Orders</Link>
                                </li>
                                :
                                null
                        }
                        <li class="nav-item nav-list">
                            <Link to = "/order_history" class="menu-button">Order History</Link>
                        </li>
                        <li class="nav-item nav-list">
                            <Link to = '/about' class="menu-button">About</Link>
                        </li>
                    </ul>
                    :
                    <ul class="navbar-nav">
                        <li class="nav-item nav-list">
                            <Link to = "/about" class="menu-button">About</Link>
                        </li>
                    </ul>
                    } */}
                {/* {(!!this.props.signedIn) ? 
                <ul class="navbar-nav nav-right-btn">
                    <li class="nav-item">
                        <button class="btn btn-warning" type="button">
                            <NotificationBadge style = {{left: '90%', bottom:'0px', top: 'none', right: 'none'}} count = {cart_length} effect = {Effect.SCALE}/> 
                            <Link class="text-reset" to={'/cart'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                                </svg>
                            </Link>
                        </button>
                    </li>
                </ul>
                :
                <div></div>
                } */}
                
                {/* <GoogleAuth history = {this.props.history} />
                <ul class="navbar-nav nav-right-btn">
                    <li class="nav-item">
                        {this.renderUser()}
                    </li>
                </ul> */}

            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        state: state
    })
}

export default connect(mapStateToProps, {})(Navbar) 