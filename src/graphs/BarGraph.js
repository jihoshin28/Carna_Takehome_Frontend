import React from 'react'
import Chart from 'react-google-charts'

class BarGraph extends React.Component{
    render(){
        return(
            <div>
                <Chart
                    width={this.props.dimensions[0]}
                    height={this.props.dimensions[1]}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={this.props.data}
                    options={{
                        // Material design options
                        chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
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