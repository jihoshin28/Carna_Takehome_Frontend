import React from 'react'
import ScatterGraph from '../graphs/ScatterGraph'
import BarGraph from '../graphs/BarGraph'
import PieGraph from '../graphs/PieGraph'
import { connect } from 'react-redux'
import { getAllStudentCourses, getCourses, createCourse, createStudentCourse, getTeachers, getStudents } from '../actions'

class CourseSection extends React.Component {

    constructor(){
        super()
        this.state = {
            formData: {},
            studentCourse: {}
        }
    }

    async componentDidMount(){
        await this.props.getAllStudentCourses()
        await this.props.getCourses()
        await this.props.getTeachers()
        await this.props.getStudents()
    }

    addStudentToCourse = () => {
        let form = {
            ...this.state.studentCourse,
            completion: 0,
            score: 0
        }
        this.props.createStudentCourse(form)
    }

    studentCourseOnChange = (e) => {
        let newState = {...this.state}
        newState.studentCourse[e.target.id] = e.target.value
        this.setState(newState)
    }

    formOnChange = (e) => {
        let newState = {...this.state}
        newState.formData[e.target.id] = e.target.value
        this.setState(newState)
        console.log(this.state)
    }

    formOnSubmit = (e) => {
        e.preventDefault()
        let formState = this.state.formData
        if(!formState.teacher_id || !formState.subject || !formState.image) {
            alert("Please complete the form!")
        } else {
            this.props.createCourse(this.state.formData)
        }
        
    }
    

    renderTeacherOptions = () => {
        let teacherOptions = this.props.teachers.map(teacher => {
            return <option value= {teacher.id}>{teacher.first_name} {teacher.last_name}</option>
        })
        return <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Select Teacher</label>
                <select onChange = {this.formOnChange} class="form-select" id="teacher_id" >
                    <option selected>Choose...</option>
                    {teacherOptions}
                </select>
        </div>
    }

    renderStudentOptions = () => {
        let studentOptions = this.props.students.map(student => {
            return <option value= {student.id}>{student.first_name} {student.last_name}</option>
        })
        return <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Select Student</label>
                <select onChange = {this.studentCourseOnChange} class="form-select" id="student_id" >
                    <option selected>Choose...</option>
                    {studentOptions}
                </select>
        </div>
    }

    renderCourseOptions = () => {
        let courseOptions = this.props.courses.map(course => {
            return <option value= {course.id}>Course Id: {course.id}: {course.subject}</option>
        })
        return <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Select Course</label>
                <select onChange = {this.studentCourseOnChange} class="form-select" id="course_id" >
                    <option selected>Choose...</option>
                    {courseOptions}
                </select>
        </div>
    }

    classSizeData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let classes = {}
        this.props.courses.find(course => {
            if(classes[course.id]){
                classes[course.id] += course.students.length
            } else {
                classes[course.id] = course.students.length
            }
        })
        let keys = Object.keys(classes)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(classes[keys[i]])
            data.push(array)
        }
        return data
    }

    classSubjectData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let classes = {}
        this.props.courses.find(course => {
            if(classes[course.subject]){
                classes[course.subject] += course.students.length
            } else {
                classes[course.subject] = course.students.length
            }
        })
        let keys = Object.keys(classes)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(classes[keys[i]])
            data.push(array)
        }
        return data
    }

    scatterData = () => {
        let data = [['Completion', 'Score']]
        this.props.studentCourses.forEach((studentCourse) => {
            data.push([studentCourse.completion, studentCourse.score])
        })
        return data
    }

    render(){
        return(
            <React.Fragment>
                <div className = "graphRow">
                    <div className = "barCol">
                        <BarGraph dimensions = {['500px', '300px']} title = "Class Sizes" data = {this.classSizeData()} xLabel = "Class Size" yLabel = "Class Id"/>     
                    </div>
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Subjects" data = {this.classSubjectData()}/>
                    </div>
                </div>
                <div className = "graphRow">
                    <div className = "lineCol">
                        <ScatterGraph dimensions = {['100%', '500px']} data = {this.scatterData()}/>   
                    </div>
                </div>
                <div class = "postSection">
                    <h3 class = "postSectionHeader">Create new Course</h3>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Course Type</label>
                            <select onChange = {this.formOnChange} class="form-select" id="subject" >
                                <option selected>Choose...</option>
                                <option value="math">Math</option>
                                <option value="english">English</option>
                                <option value="programming">Programming</option>
                                <option value="history">History</option>
                                <option value="biology">Biology</option>
                                <option value="physics">Physics</option>
                            </select>
                    </div>
                    {this.renderTeacherOptions()}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Image URL</span>
                        <input id = "image" onChange = {this.formOnChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <button onClick = {this.formOnSubmit} class = "postButton btn btn-primary" >Create Course</button>
                </div>
                <div class = "postSection">
                    <h3>Add Student to a Course</h3>
                    {this.renderCourseOptions()}
                    {this.renderStudentOptions()}
                    <button onClick = {this.addStudentToCourse} class = "postButton btn btn-primary" >Add Student</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses.currentCourses, 
        studentCourses: state.courses.allStudentCourses,
        students: state.students.currentStudents, 
        teachers: state.teachers.currentTeachers,
    }
}

export default connect(mapStateToProps, {getAllStudentCourses, getCourses, createCourse, createStudentCourse, getTeachers, getStudents})(CourseSection)