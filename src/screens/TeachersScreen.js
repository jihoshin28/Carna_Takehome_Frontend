import React from 'react'
import { connect } from 'react-redux'
import {getTeachers} from '../actions'
import TeacherSection from '../components/TeacherSection'
import Section from '../components/Section'
import Filter from '../components/Filter'
import Sort from '../components/Sort'

class TeachersScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            teachers: props.teachers
        }
    }

    componentDidMount(){
        this.props.getTeachers()
        console.log(this.props.teachers)
    }

    sort = (value) => {
        console.log(value)
        let sorted
        if(value === 'First Name'){
            sorted = this.props.teachers.sort((a,b) => {
                return a.first_name.localeCompare(b.first_name);
            })
        } else if(value === 'Last Name'){
            sorted = this.props.teachers.sort((a,b) => {
                return a.last_name.localeCompare(b.last_name);
            })
        } else if(value === 'Email'){
            sorted = this.props.teachers.sort((a,b) => {
                return a.email.localeCompare(b.email);
            })
        }
        this.setState({
            teachers: sorted
        })
    }

    render(){
        return(
            <div>
                <h1 class = "screenHeader">Teachers Screen</h1>
                <div class = "row filter-sort-row">
                    <div class = "col-6">
                        {/* <Filter filter = {this.filter}/> */}
                    </div>
                    <div class = "col-6">
                        <Sort options = {['First Name', 'Last Name', 'Email']} sort = {this.sort}/>
                    </div>
                </div>
                {this.state.teachers.map(teacher => {
                    console.log(teacher)
                    return (
                        <Section>
                            <TeacherSection teacher_id = {teacher.id} history = {this.props.history} imageURL = {teacher.image} firstName = {teacher.first_name} lastName = {teacher.last_name} email = {teacher.email} city = {teacher.city} state = {teacher.state}/> 
                        </Section>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teachers: state.teachers.currentTeachers
    }
}

export default connect(mapStateToProps, {getTeachers})(TeachersScreen)