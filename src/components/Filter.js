import React from 'react'

class Filter extends React.Component{

    filterFunction = (e) => {
        this.props.filter(e.target.text)
    }

    renderOptions(){
        return this.props.options.map(option => {
            return <li><a class="dropdown-item" onClick = {this.filterFunction}>{option}</a></li>
        })
    }

    render(){
        return(
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {this.renderOptions()}
                </ul>
            </div>
        )
    }
}

export default Filter