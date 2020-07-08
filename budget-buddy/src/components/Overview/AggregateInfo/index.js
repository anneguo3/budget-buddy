import React from 'react';
import { useSelector } from 'react-redux';

import PieChartIndex from './pieChartIndex.js';
// REFACTOR TODO !!!
export function AggregateInfo() {
      const placeholder = <p>You have no data to display.</p>
      
      const aggregate = useSelector((state) => state.aggregate);
      let dataExists = ((aggregate.value.totalInflow != 0) || (aggregate.value.totalOutflow != 0));
      let display = dataExists ? <PieChartIndex /> : placeholder;

      

      return(
            <div className="aggregateInfo">
                  {display}
            </div>
      );
}
