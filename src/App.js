import React from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthScreen from './screens/AuthScreen'
import AdminScreen from './screens/AdminScreen'
import CoursesScreen from './screens/CoursesScreen'
import CourseDetailsScreen from './screens/CourseDetailsScreen'
import ForumScreen from './screens/ForumScreen'
import ForumsScreen from './screens/ForumsScreen'
import GroupsScreen from './screens/GroupsScreen'
import SettingsScreen from './screens/SettingsScreen'
import StudentsListScreen from './screens/StudentsListScreen'
import StudentProgress from './screens/StudentProgress'
import StudentsScreen from './screens/StudentsScreen'
import TeachersScreen from './screens/TeachersScreen'
import NavBar from './containers/Sidebar'
import ToolBar from './containers/Toolbar'


class App extends React.Component {
  Redirect = () => {
    return <Redirect to ={{pathname: '/auth'}}/>
  }
  render(){
    var token =localStorage.getItem('token')
    return (
      <div className="App">
        <div className = "page-display">
          <NavBar history = {this.props.history}/>  
          <ToolBar history = {this.props.history}/>
          <Route exact path={'/'} render={(props) => <AdminScreen {...props} />} />
          <Route exact path={'/auth'} render={(props) => <AuthScreen {...props} />} />
          <Route exact path={'/courses'} render = {(props) => token !== null ? <CoursesScreen {...props} /> : this.Redirect()} />
          <Route exact path={'/course_details/:id'} render={(props) => token !== null ? <CourseDetailsScreen {...props} /> : this.Redirect()} />
          <Route exact path={'/groups'} render={(props) => token !== null ? <GroupsScreen {...props} /> : this.Redirect()} />
          <Route exact path={'/forum/:id'} render={(props) => token !== null ? <ForumScreen {...props} /> : this.Redirect()} />
          <Route exact path={'/forums'} render={(props) => token !== null ? <ForumsScreen {...props} /> : this.Redirect()} />
          <Route exact path={'/settings'} render={(props) => token !== null ? <SettingsScreen {...props} /> : this.Redirect()} />
          <Route exact path={'/student_list/:group_type/:id'} render={(props) => token !== null ? <StudentsListScreen {...props} /> : this.Redirect()} />
          <Route exact path={'/student_progress/:course_id/:student_id'} render={(props) => token !== null ? <StudentProgress {...props} /> : this.Redirect()} />
          <Route exact path={'/students'} render={(props) => token !== null ? <StudentsScreen {...props} /> : this.Redirect()} />
          <Route exact path={'/teachers'} render={(props) => token !== null ? <TeachersScreen {...props} />:  this.Redirect()} />
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
