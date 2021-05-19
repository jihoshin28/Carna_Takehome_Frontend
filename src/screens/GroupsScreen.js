import React from 'react'
import GroupSection from '../components/GroupSection'

class GroupsScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Groups Screen</h1>
                <GroupSection />
                <GroupSection />
                <GroupSection /> 
            </div>
        )
    }
}

export default GroupsScreen