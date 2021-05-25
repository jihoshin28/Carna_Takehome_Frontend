import React from 'react'
import { connect } from 'react-redux'
import { setGraphSetting, changeAdminEmail, changeAdminPassword, changeAdminUsername } from '../actions'

class SettingsScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            emailForm: {},
            passwordForm: {},
            usernameForm: {}
        }
    }

    selectGraphType = (e) => {
        console.log(e.target.value)
        this.props.setGraphSetting(e.target.value)
    }

    formOnChange = (e) => {
        let newState = {...this.state}
        if(e.target.id === "username"){
            newState.usernameForm[e.target.id] = e.target.value
            this.setState(newState)
            console.log(this.state)
        }
         if(e.target.id === "old_password" || e.target.id === "new_password" || e.target.id === "new_password_confirm"){
            newState.passwordForm[e.target.id] = e.target.value
            this.setState(newState)
            console.log(this.state)
        }

        if(e.target.id === "old_email" || e.target.id === "new_email"){
            newState.emailForm[e.target.id] = e.target.value
            this.setState(newState)
            console.log(this.state)
        }
    }

    updateUsername = () => {        
        this.props.changeAdminUsername(this.props.admin.id, {username: this.state.usernameForm.username})
    }
    
    updatePassword = () => {
        let form = this.state.passwordForm
        console.log(form.old_password, form.new_password)
        if(!form.old_password || !form.new_password){
            alert('Please fill out all fields!')
            return
        }
        if(form.old_password !== this.props.admin.password){
            alert('Your old password is incorrect!')
            return
        }
        if(form.new_password !== form.new_password_confirm){
            alert('Your password confirmation does not match!')
            return
        }
        this.props.changeAdminPassword(this.props.admin.id, {password: this.state.passwordForm.new_password})
    }
    
    updateEmail = () => {
        let form = this.state.emailForm
        if(!form.old_email || !form.new_email){
            alert('Please fill out all fields!')
            return
        }
        if(form.old_email !== this.props.admin.email){
            alert('Your old email is incorrect!')
            return
        }
        this.props.changeAdminEmail(this.props.admin.id, this.state.emailForm)
    }

    render(){
        return(
            <div className = "container">
                <h1 className = "screenHeader">Settings</h1>
                <div className = "settingSection">
                    <h4 className = "settingSectionHeader">Select Admin Section</h4>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Section Type</label>
                            <select onChange = {this.selectGraphType}class="form-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="course">Course</option>
                                <option value="group">Group</option>
                                <option value="forum">Forum</option>
                            </select>
                    </div>
                </div>
                <div className = "settingSection">
                    <h4 className = "settingSectionHeader">Change Admin Username</h4>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">New Username</label>
                        <input onChange = {this.formOnChange} id = "username"  type="text" class="form-control" placeholder="New Username" aria-label="New Username" aria-describedby="button-addon2"/>
                        <button onClick = {this.updateUsername} class="btn btn-outline-secondary" type="button" id="button-addon2">Update</button>
                    </div>
                </div>
                <div className = "settingSection">
                    <h4 className = "settingSectionHeader">Change Admin Email</h4>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Old Email</label>
                        <input onChange = {this.formOnChange} id = "old_email" type="text" class="form-control" placeholder="Old Email" aria-label="Old Email" aria-describedby="button-addon2"/>
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">New Email</label>
                        <input onChange = {this.formOnChange} id = "new_email"  type="text" class="form-control" placeholder="New Email" aria-label="New Email" aria-describedby="button-addon2"/>
                        <button onClick = {this.updateEmail} class="btn btn-outline-secondary" type="button" id="button-addon2">Update</button>
                    </div>
                </div>
                <div className = "settingSection">
                    <h4 className = "settingSectionHeader">Change Admin Password</h4>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Old Password</label>
                        <input onChange = {this.formOnChange} id = "old_password" type="password" class="form-control" placeholder="Old Password" aria-label="Old Password" aria-describedby="button-addon2"/>
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">New Password</label>
                        <input onChange = {this.formOnChange} id = "new_password" type="password" class="form-control" placeholder="New Password" aria-label="New Password" aria-describedby="button-addon2"/>
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Confirmation</label>
                        <input onChange = {this.formOnChange} id = "new_password_confirm" type="password" class="form-control" placeholder="New Password Confirm" aria-label="New Password Confirm" aria-describedby="button-addon2"/>
                        <button onClick = {this.updatePassword} class="btn btn-outline-secondary" type="button" id="button-addon2">Update</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        admin: state.teachers.currentAdmin
    }
}

export default connect(mapStateToProps, { setGraphSetting, changeAdminEmail, changeAdminPassword, changeAdminUsername})(SettingsScreen)