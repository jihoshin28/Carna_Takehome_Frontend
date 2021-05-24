import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions'

class AuthScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            formData: {}
        }
    }

    formOnChange = (e) => {
        let newState = {...this.state}
        newState.formData[e.target.id] = e.target.value
        this.setState(newState)
        console.log(this.state)
    }

    signIn = () => {
        this.props.signIn(this.state.formData)
    }
    
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Sign In</h1>
                <div class = "signInCenter">
                    <div class = "signInSection">
                
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
                            <input id = "username" onChange = {this.formOnChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                            <input id = "password" onChange = {this.formOnChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <button onClick = {this.signIn} class = "postButton btn btn-primary" >Sign In</button>

                        
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(null, {signIn})(AuthScreen)