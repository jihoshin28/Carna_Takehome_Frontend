import React from 'react'
import UserSection from '../components/UserSection'

class UsersScreen extends React.Component {
    render(){
        return(
            <div>
                <h1>Users Screen</h1>
                <button className = "btn btn-primary">Click me!</button> 
                <UserSection />
                <UserSection />
                <UserSection /> 
            </div>
        )
    }
}

export default UsersScreen