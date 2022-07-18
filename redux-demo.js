const redux = require('redux');

// this will run when for the first time store function is running.
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }

    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};
// store will be created. 
const store = redux.legacy_createStore(counterReducer);
console.log(store.getState(), 'first time');

//if reducer function run again for any action, store data will be change. then, what will happen? connected subscriber will give a output.

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

// if reducer function change store data for an certain action , where will be the reaction?
store.subscribe(counterSubscriber);
store.dispatch({ type: 'increment' }); // action which will trigger reducer function;
store.dispatch({ type: 'decrement' }); // action which will trigger reducer function;
