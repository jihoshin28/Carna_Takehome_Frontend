import React from 'react'
import { connect } from 'react-redux'
import { setGraphSetting } from '../actions'

class SettingsScreen extends React.Component {

    selectGraphType = (e) => {
        console.log(e.target.value)
        this.props.setGraphSetting(e.target.value)
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
                    <h4 className = "settingSectionHeader">Update Admin Email</h4>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Old Email</label>
                        <input type="text" class="form-control" placeholder="Old Email" aria-label="Old Email" aria-describedby="button-addon2"/>
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">New Email</label>
                        <input type="text" class="form-control" placeholder="New Email" aria-label="New Email" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Update</button>
                    </div>
                </div>
                <div className = "settingSection">
                    <h4 className = "settingSectionHeader">Update Admin Password</h4>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Old Password</label>
                        <input type="text" class="form-control" placeholder="Old Password" aria-label="Old Password" aria-describedby="button-addon2"/>
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">New Password</label>
                        <input type="text" class="form-control" placeholder="New Password" aria-label="New Password" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Update</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adminState: state.admin
    }
}

export default connect(mapStateToProps, { setGraphSetting })(SettingsScreen)