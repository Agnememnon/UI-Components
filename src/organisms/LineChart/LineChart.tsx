import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export interface ILineChartProps {
    label: string,
    id:string,
    options: object
};

export const LineChart:React.FC<ILineChartProps> = (props) => {
    return (
        <React.Fragment>
            <div id={props.id}>
                <HighchartsReact highcharts={Highcharts} options={props.options} />
            </div>
        </React.Fragment>
    );
};
 export default LineChart;