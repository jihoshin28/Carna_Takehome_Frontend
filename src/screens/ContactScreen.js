import React from 'react'
import {connect} from 'react-redux'
import {getStudent, getTeacher} from '../actions'

class ContactScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            user: null,
            email: '',
            textarea: ''
        }
    }
    async componentDidMount(){
        console.log(this.props.match.params)
        let params = this.props.match.params 
        let user
        if(params.user === 'student'){
            user = await this.props.getStudent(params.id)
            this.setState({
                user: user,
                title: 'Student'
            })
        } else if(params.user === 'teacher'){
            user = await this.props.getTeacher(params.id)
            this.setState({
                user: user,
                title: 'Teacher'
            })
        }
        
    }

    onChange = (e) => {
        let newState = {...this.state}
        newState[e.target.type] = e.target.value
        this.setState(newState)
        console.log(this.state)
    }

    render(){
        return(
            <div class = "contact">
                <h1>
                    Contact {this.state.title}
                </h1> 
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input onChange = {this.onChange} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea onChange = {this.onChange} class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button class = "btn btn-primary" onClick = {this.sendEmail}>Send Email</button>
            </div> 
        )   
    }
}

export default connect(null, {getStudent, getTeacher})(ContactScreen)