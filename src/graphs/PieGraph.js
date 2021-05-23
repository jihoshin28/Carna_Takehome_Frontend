import React from 'react'
import Chart from 'react-google-charts'

class PieGraph extends React.Component{
    render(){
        return(
            <div>
                <Chart
                width={this.props.dimensions[0]}
                height={this.props.dimensions[1]}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={this.props.data}
                options={{
                    title: `${this.props.title}`,
                }}
                rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
}


export default PieGraph