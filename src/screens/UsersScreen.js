import React from 'react'
import UserSection from '../components/UserSection'

class UsersScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Users Screen</h1>
                <UserSection />
                <UserSection />
                <UserSection /> 
            </div>
        )
    }
}

export default UsersScreen