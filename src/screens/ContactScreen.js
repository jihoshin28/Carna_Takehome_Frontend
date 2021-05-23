import React from 'react'

class ContactScreen extends React.Component{

    componentDidMount(){
        console.log(this.props.match.params)
    }

    render(){
        return(
            <div>
                <h1>
                    Contact Screen
                </h1> 
            </div> 
        )   
    }
}

export default ContactScreen