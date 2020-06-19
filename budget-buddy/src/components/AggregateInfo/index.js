import React from 'react';
import { useSelector } from 'react-redux';

// or should i be importing selectList???
import selectList from './../ucer.js';

export function AggregateInfo() {
      const listMaster = useSelector((state) => state.list);
      let name = 'Walmart';
      let totalInflow = 0;
      ;

      populateMaxUsed() {
            for (item in listMaster) {
                  if (!item.isMoneyIncrease) {
                        totalInflow += item.price;
                  }
            }

            this.props.dispatch(actions.updateTotalInflow())
      }
      
      return();
}