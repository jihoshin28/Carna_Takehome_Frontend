import React from 'react'

class DetailsScreen extends React.Component{

    componentDidMount(){
        console.log(this.props.match.params)
    }

    render(){
        return(
            <div>
                <h1>
                    Details Screen
                </h1> 
            </div> 
        )   
    }
}

export default DetailsScreen