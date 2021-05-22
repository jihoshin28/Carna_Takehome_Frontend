import React from 'react'
import BarGraph from '../graphs/BarGraph'
import PieGraph from '../graphs/PieGraph'
import LineGraph from '../graphs/LineGraph'

class CalendarScreen extends React.Component {
    render(){
        return(
            <div>
                <h1 class = "screenHeader">Data</h1>
                <div className = "container">
                    <div className = "graphRow">
                        <div className = "barCol">
                            <BarGraph/>     
                        </div>
                        <div className = "pieCol">
                            <PieGraph/>
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