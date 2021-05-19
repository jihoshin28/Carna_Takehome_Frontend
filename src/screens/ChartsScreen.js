import React from 'react'
import BarGraph from '../graphs/BarGraph'
import PieGraph from '../graphs/PieGraph'
import LineGraph from '../graphs/LineGraph'

class CalendarScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Charts</h1>
                <button className = "btn btn-primary">Click me!</button> 
                {/* <BarGraph/>
                <PieGraph/>
                <LineGraph /> */}

            </div>
            
        )
    }
}

export default CalendarScreen