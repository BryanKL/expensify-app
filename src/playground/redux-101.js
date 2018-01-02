import { createStore } from 'redux';

// action generators - functions that returns action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        // incrementBy: incrementBy,
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    // incrementBy: incrementBy,
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});


//Reducers
//1. Reducers are pure functions
//2. never change state or action

const countReducer = (state= {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
        return state;
    }
};

const store = createStore(countReducer); // this is the one calling the reducer using createStore

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 20}));

store.dispatch(decrementCount());

store.dispatch(setCount({count: 200}));

// store.dispatch({
//     type: 'SET',
//     count: 101
// })