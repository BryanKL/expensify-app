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

export {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate};