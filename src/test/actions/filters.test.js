import moment from 'moment';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0),
    });
});

test('should filter text test', () => {
    const action = setTextFilter('Hello');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Hello'
    });
});

test('should filter text default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate filter amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_AMOUNT_FILTER'
    })
})

test('should generate filter date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_DATE_FILTER'
    })
})