import React from 'react'
import BarGraph from '../graphs/BarGraph'
import PieGraph from '../graphs/PieGraph'
import LineGraph from '../graphs/LineGraph'

class CalendarScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Admin</h1>
                <div className = "container">
                    <div className = "graphRow">
                        <div className = "barCol">
                            <BarGraph dimensions = {['500px', '300px']}/>     
                        </div>
                        <div className = "pieCol">
                            <PieGraph dimensions = {['500px', '300px']}/>
                        </div>
                    </div>
                    <div className = "graphRow">
                        <div className = "lineCol">
                            <LineGraph />
                        </div>
                    </div>
                </div>
                {/* <BarGraph/>
                <PieGraph/>
                <LineGraph /> */}

            </div>
            
        )
    }
}

export default CalendarScreen