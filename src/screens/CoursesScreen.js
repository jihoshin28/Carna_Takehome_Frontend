import React from 'react'
import CourseSection from '../components/CourseSection'

class CoursesScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Courses Screen</h1>
                <CourseSection/>
                <CourseSection/>
                <CourseSection/> 
                
            </div>
        )
    }
}

export default CoursesScreen