import React from 'react'
import { connect } from 'react-redux'
import {getStudents} from '../actions'
import StudentSection from '../components/StudentSection'
import Section from '../components/Section'
import Filter from '../components/Filter'
import Sort from '../components/Sort'

class StudentsScreen extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            students: props.students
        }
    }
    
    componentDidMount(){
        this.props.getStudents()
        console.log(this.props.students)
    }

    sort = (value) => {
        console.log(value)
        let sorted
        if(value === 'First Name'){
            sorted = this.props.students.sort((a,b) => {
                return a.first_name.localeCompare(b.first_name);
            })
        } else if(value === 'Last Name'){
            sorted = this.props.students.sort((a,b) => {
                return a.last_name.localeCompare(b.last_name);
            })
        } else if(value === 'Email'){
            sorted = this.props.students.sort((a,b) => {
                return a.email.localeCompare(b.email);
            })
        }
        this.setState({
            students: sorted
        })
    }

    render(){
        return(
            <div>
                <h1 class = "screenHeader">Students Screen</h1>
                <div class = "row filter-sort-row">
                    <div class = "col-6">
                        {/* <Filter options = {[]} filter = {this.filter}/> */}
                    </div>
                    <div class = "col-6">
                        <Sort options = {['First Name', 'Last Name', 'Email']} sort = {this.sort}/>
                    </div>
                </div>
                {this.state.students.map(student => {
                    console.log(student)
                    return(
                        <Section>
                            <StudentSection imageURL = {student.image} firstName = {student.first_name} lastName = {student.last_name} email = {student.email}/> 
                        </Section>
                    ) 
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students.currentStudents
    }
}

export default connect(mapStateToProps, {getStudents})(StudentsScreen)