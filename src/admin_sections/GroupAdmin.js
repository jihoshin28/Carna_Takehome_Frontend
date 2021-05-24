import React from 'react'
import ScatterGraph from '../graphs/ScatterGraph'
import BarGraph from '../graphs/BarGraph'
import PieGraph from '../graphs/PieGraph'
import { connect } from 'react-redux'
import { getGroups, createGroup, getStudents, createStudentGroup } from '../actions'

class GroupSection extends React.Component {
    constructor(){
        super()
        this.state = {
            formData: {},
            studentGroup: {}
        }
    }

    async componentDidMount(){
        await this.props.getGroups()
        await this.props.getStudents()
    }

    addStudentToGroup = () => {
        this.props.createStudentGroup(this.state.studentGroup)
    }

    studentGroupOnChange = (e) => {
        let newState = {...this.state}
        newState.studentGroup[e.target.id] = e.target.value
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
        if(!formState.type || !formState.name || !formState.image) {
            alert("Please complete the form!")
        } else {
            console.log('YES')
            this.props.createGroup(this.state.formData)
        }
    }

    groupSizeData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let groups = {}
        this.props.groups.forEach(group => {
            if(groups[group.id]){
                groups[group.id] += group.students.length
            } else {
                groups[group.id] = group.students.length
            }
        })
        
        let keys = Object.keys(groups)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(groups[keys[i]])
            data.push(array)
        }
        return data
    }

    groupTypeData = () => {
        let data = [['Subject', 'Enrolled Number']]
        let groups = {}
        this.props.groups.forEach(group => {
            if(groups[group.type]){
                groups[group.type] += group.students.length
            } else {
                groups[group.type] = group.students.length
            }
        })
        let keys = Object.keys(groups)
        for(let i = 0; i < keys.length; i++){
            let array = []
            array.push(keys[i])
            array.push(groups[keys[i]])
            data.push(array)
        }
        return data
    }

    renderStudentOptions = () => {
        let studentOptions = this.props.students.map(student => {
            return <option value= {student.id}>{student.first_name} {student.last_name}</option>
        })
        return <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Select Student</label>
                <select onChange = {this.studentGroupOnChange} class="form-select" id="student_id" >
                    <option selected>Choose...</option>
                    {studentOptions}
                </select>
        </div>
    }

    renderGroupOptions = () => {
        let groupOptions = this.props.groups.map(group => {
            return <option value= {group.id}>{group.name}</option>
        })
        return <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Select Group</label>
                <select onChange = {this.studentGroupOnChange} class="form-select" id="group_id" >
                    <option selected>Choose...</option>
                    {groupOptions}
                </select>
        </div>
    }

    render(){
        return(
            <React.Fragment>
                <div className = "graphRow">
                    <div className = "barCol">
                        <BarGraph dimensions = {['500px', '300px']} title = "Group Size" data = {this.groupSizeData()} xLabel = "Group Size" yLabel = "Group Id"/>     
                    </div>
                    <div className = "pieCol">
                        <PieGraph dimensions = {['500px', '300px']} title = "Group Types" data = {this.groupTypeData()}/>
                    </div>
                </div>
                <div class = "postSection">
                    <h3 class = "postSectionHeader">Create new Group</h3>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Group Type</label>
                            <select onChange = {this.formOnChange} class="form-select" id="type" >
                                <option selected>Choose...</option>
                                <option value="class">Class</option>
                                <option value="social">Social</option>
                                <option value="interest">Interest</option>
                            </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input id = "name" onChange = {this.formOnChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Image URL</span>
                        <input id = "image" onChange = {this.formOnChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <button onClick = {this.formOnSubmit} class = "postButton btn btn-primary" >Create Group</button>
                </div>
                <div class = "postSection">
                    <h3>Add Student to a Group</h3>
                    {this.renderGroupOptions()}
                    {this.renderStudentOptions()}
                    <button onClick = {this.addStudentToGroup} class = "postButton btn btn-primary" >Create Group</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups.currentGroups,
        students: state.students.currentStudents
    }
}

export default connect(mapStateToProps, {getGroups, createGroup, getStudents, createStudentGroup})(GroupSection)