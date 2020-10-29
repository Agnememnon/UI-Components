import React from 'react';
import LineChart from './LineChart';

export default {
    title: 'Organisms/LineChart',
    component: LineChart,
};
const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };
export const Line = () => <LineChart options={options}/>
const options2 = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };
export const Spline = () => <LineChart options={options2}/>