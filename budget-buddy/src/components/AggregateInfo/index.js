import React from 'react';
import { useSelector } from 'react-redux';

import PieChartIndex from './pieChartIndex.js';

export function AggregateInfo() {
      const aggregate = useSelector((state) => state.aggregate);
      const chart = <PieChartIndex />;


      return(
            <div className="aggregateInfo">
                  {chart}
            </div>
      );
}