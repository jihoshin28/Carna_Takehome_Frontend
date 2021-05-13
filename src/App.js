import './App.css';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthScreen from './screens/AuthScreen'
import CalendarScreen from './screens/CalendarScreen'
import ChartsScreen from './screens/ChartsScreen'
import CoursesScreen from './screens/CoursesScreen'
import ForumsScreen from './screens/ForumsScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettinsScreen'
import UsersScreen from './screens/UsersScreen'
import NavBar from './containers/Navbar'


function App() {
  return (
    <div className="App">
      <div>

        <NavBar history = {this.props.history}/>  
          <Route exact path={'/'} render={(props) => <AdminPanel {...props} />}></Route> 
          <Route exact path={'/auth'} render={(props) => <AuthScreen {...props} />} />
          <Route exact path={'/calendar'} render={(props) => <CalendarScreen {...props} />} />
          <Route exact path={'/charts'} render={(props) => <ChartsScreen {...props} />} />
          <Route exact path={'/courses'} render={(props) => <CoursesScreen {...props} />} />
          <Route exact path={'/forums'} render={(props) => <ForumsScreen {...props} />} />
          <Route exact path={'/profile'} render={(props) => <ProfileScreen {...props} />} />
          <Route exact path={'/settings'} render={(props) => <SettingsScreen {...props} />} />
          <Route exact path={'/users'} render={(props) => <UsersScreen {...props} />} />
      </div>
        
    </div>
  );
}

const mapStateToProps = (state) => {
  return({
    state: state
  })
}
export default connect(mapStateToProps, {})(App)
