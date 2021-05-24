import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthScreen from './screens/AuthScreen'
import AdminScreen from './screens/AdminScreen'
import ContactScreen from './screens/ContactScreen'
import CoursesScreen from './screens/CoursesScreen'
import CourseDetailsScreen from './screens/CourseDetailsScreen'
import ForumScreen from './screens/ForumScreen'
import ForumsScreen from './screens/ForumsScreen'
import GroupsScreen from './screens/GroupsScreen'
// import SignUpScreen from './screens/SignUpScreen'
import SettingsScreen from './screens/SettingsScreen'
import StudentsListScreen from './screens/StudentsListScreen'
import StudentProgress from './screens/StudentProgress'
import StudentsScreen from './screens/StudentsScreen'
import TeachersScreen from './screens/TeachersScreen'
import NavBar from './containers/Sidebar'
import ToolBar from './containers/Toolbar'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className = "page-display">
          <NavBar history = {this.props.history}/>  
          <ToolBar history = {this.props.history}/>
          <Route exact path={'/'} render={(props) => <AdminScreen {...props} />} />
          <Route exact path={'/auth'} render={(props) => <AuthScreen {...props} />} />
          <Route exact path={'/contact/:user/:id'} render={(props) => <ContactScreen {...props} />} />
          <Route exact path={'/courses'} render={(props) => <CoursesScreen {...props} />} />
          <Route exact path={'/course_details/:id'} render={(props) => <CourseDetailsScreen {...props} />} />
          <Route exact path={'/groups'} render={(props) => <GroupsScreen {...props} />} />
          <Route exact path={'/forum/:id'} render={(props) => <ForumScreen {...props} />} />
          <Route exact path={'/forums'} render={(props) => <ForumsScreen {...props} />} />
          {/* <Route exact path={'/signup'} render={(props) => <SignUpScreen {...props} />} /> */}
          <Route exact path={'/settings'} render={(props) => <SettingsScreen {...props} />} />
          <Route exact path={'/student_list/:group_type/:id'} render={(props) => <StudentsListScreen {...props} />} />
          <Route exact path={'/student_progress/:course_id/:student_id'} render={(props) => <StudentProgress {...props} />} />
          <Route exact path={'/students'} render={(props) => <StudentsScreen {...props} />} />
          <Route exact path={'/teachers'} render={(props) => <TeachersScreen {...props} />} />
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
