import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


////////////////////////////
// START of Expenses Reducer
////////////////////////////

// Add expense
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0,
        createAt = '',
    } = {}
) => ({ 
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note, 
        amount,
        createAt
    }
});


//remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//edit expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        default: 
        return state;
    }
};

///////////////////////////
// START of Filter Reducer
///////////////////////////

// set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});

// sort by amount
const sortByAmount = () => ({
    type: 'SORT_AMOUNT_FILTER',
});

// sort by date
const sortByDate = () => ({
    type: 'SORT_DATE_FILTER',
});

// set start date
const setStartDate = ( startDate = undefined ) => ({
    type: 'SET_START_DATE',
    startDate,
});

// set end date
const setEndDate = ( endDate = undefined ) => ({
    type: 'SET_END_DATE',
    endDate,
});

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return { 
                ...state, 
                text: action.text
            };
        case 'SORT_AMOUNT_FILTER':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_DATE_FILTER':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return { 
                ...state, 
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return { 
                ...state, 
                endDate: action.endDate
            };
        default: 
        return state;
    }
};

////////////////////////
// Get Visible Expenses
///////////////////////

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};


///////////////////////
// store creation
//////////////////////

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(VisibleExpenses);
});

////////////////////////
// calls
////////////////////////

const expenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 100, createAt: 1000 }));
const expenseTwo = store.dispatch(addExpense( { description: 'Coffee', amount: 300, createAt: -100 }));

// store.dispatch(removeExpense({id: expenseOne.expenses.id}));
// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate());   //date

// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(800));

//console.log(store.getState());

///////////////////////////
// starting declaration
///////////////////////////

const demoState = {
    expenses: [{
        id: 'WTF',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

/////////////////////
//example
////////////////////

// const user = ({
//     name: "jon",
//     age: 24,
// });

// console.log({...user, location: 'new york', age: 27});