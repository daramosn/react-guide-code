import React from 'react';

import Chartbar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(expense => expense.value);
    const totalMaxium = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint =>
                <Chartbar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={totalMaxium}
                />
            )}
        </div>
    );
};

export default Chart;