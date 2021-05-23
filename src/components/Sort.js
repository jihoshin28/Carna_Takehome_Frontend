import React from 'react'

class Sort extends React.Component{

    sortFunction = (e) => {
        console.log(e.target.text)
       this.props.sort(e.target.text)
    }

    renderOptions(){
        return this.props.options.map(option => {
            return <li><a class="dropdown-item" onClick = {this.sortFunction}>{option}</a></li>
        })
    }

    render(){
        return(
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {this.renderOptions()}
                </ul>
            </div>
        )
    }
}

export default Sort