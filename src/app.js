import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import configureStore from './store/configureStore';

import './styles/styles.scss';

const store = configureStore();

// console.log(store.getState());
store.dispatch(addExpense( { description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense( { description: 'Gas Bill', createAt: 1000}));
store.dispatch(addExpense( { description: 'rent', amount: 109500}));

// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

// console.log(store.getState());

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(VisibleExpenses);

const jsx = (
    <Provider store={store}> 
        <AppRouter /> 
    </Provider>

);

ReactDOM.render( jsx, document.getElementById('app'));