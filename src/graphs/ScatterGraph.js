import React from 'react'
import Chart from 'react-google-charts'

class ScatterGraph extends React.Component{
    render(){
        return(
            <div>
                <Chart
                    width={this.props.dimensions[0]}
                    height={this.props.dimensions[1]}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={this.props.data}
                    options={{
                        title: 'Students Scores vs. Completion',
                        hAxis: { title: 'Score', minValue: 0, maxValue: 100 },
                        vAxis: { title: 'Completion', minValue: 0, maxValue: 100 },
                        legend: 'none',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
}

export default ScatterGraph