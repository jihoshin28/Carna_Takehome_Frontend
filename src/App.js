import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import AdminPanel from './screens/AdminPanel'
import AuthScreen from './screens/AuthScreen'
import DataScreen from './screens/DataScreen'
import CoursesScreen from './screens/CoursesScreen'
import ForumsScreen from './screens/ForumsScreen'
import GroupsScreen from './screens/GroupsScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import UsersScreen from './screens/UsersScreen'
import NavBar from './containers/Sidebar'
import ToolBar from './containers/Toolbar'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className = "page-display">
  
          <NavBar history = {this.props.history}/>  
          <ToolBar history = {this.props.history}/>
          <Route exact path={'/'} render={(props) => <AdminPanel {...props} />}></Route> 
          <Route exact path={'/auth'} render={(props) => <AuthScreen {...props} />} />
          <Route exact path={'/courses'} render={(props) => <CoursesScreen {...props} />} />
          <Route exact path={'/data'} render={(props) => <DataScreen {...props} />} />
          <Route exact path={'/groups'} render={(props) => <GroupsScreen {...props} />} />
          <Route exact path={'/forums'} render={(props) => <ForumsScreen {...props} />} />
          <Route exact path={'/profile'} render={(props) => <ProfileScreen {...props} />} />
          <Route exact path={'/settings'} render={(props) => <SettingsScreen {...props} />} />
          <Route exact path={'/users'} render={(props) => <UsersScreen {...props} />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    state: state
  })
}
export default connect(mapStateToProps, {})(App)
