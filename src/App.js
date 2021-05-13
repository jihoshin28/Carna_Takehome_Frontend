import Navbar from './containers/Navbar'
import './App.css';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <NavBar history = {this.props.history}/>  
        <Route exact path={'/'} render={(props) => <Home {...props} />}></Route> 
        <Route exact path={'/order_history'} render={(props) => <OrderHistory {...props} />} />
        <Route exact path={'/active_orders'} render={(props) => <ActiveOrders {...props} />} />
        <Route exact path={'/about'} render={(props) => <About {...props} />} />
        <Route exact path={'/cart'} render={(props) => <Cart {...props} />} />
        
    </div>
  );
}

const mapStateToProps = (state) => {
  return({
    state: state
  })
}
export default connect(mapStateToProps, {})(App)
