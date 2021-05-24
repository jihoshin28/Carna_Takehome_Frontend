import React from 'react'
import Chart from 'react-google-charts'

class BarGraph extends React.Component{
    render(){
        return(
            <div>
                <Chart
                    width={this.props.dimensions[0]}
                    height={this.props.dimensions[1]}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={this.props.data}
                    options={{
                        // Material design options
                        title: `${this.props.title}`,
                        hAxis: {
                            title: `${this.props.xLabel}`,
                            minValue: 0,
                        },
                        vAxis: {
                            title: `${this.props.yLabel}`,
                        },
                    }}

                  
                    // For tests
                rootProps={{ 'data-testid': '2' }}
                />
            </div>
        )
    }
}


export default BarGraph