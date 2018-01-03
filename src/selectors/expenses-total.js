// import React from 'react';
// import ExpenseListItem from '../components/ExpenseListItem';

// const getExpensesTotal = (props) => (
//     <div>
        
//     </div>
// );

// export default getExpensesTotal;

export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
  };