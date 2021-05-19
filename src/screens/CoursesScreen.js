import React from 'react'
import CourseSection from '../components/CourseSection'

class CoursesScreen extends React.Component {
    render(){
        return(
            <div>
                <h1>Courses Screen</h1>
                <button className = "btn btn-primary">Click me! </button> 
                <CourseSection/>
                <CourseSection/>
                <CourseSection/> 
                
            </div>
        )
    }
}

export default CoursesScreen