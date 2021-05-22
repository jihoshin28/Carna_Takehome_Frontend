import React from 'react'
import StudentSection from '../components/StudentSection'

class StudentsScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Students Screen</h1>
                <StudentSection />
                <StudentSection />
                <StudentSection /> 
            </div>
        )
    }
}

export default StudentsScreen