import {createStore} from 'redux'

var myDB = {
    status:true
}


var action = {
    type: 'TOGGLE_STATUS'
}


var postReducer = (state = myDB, action) => {
    if(action.type === 'TOGGLE_STATUS'){
        state.status = !state.status;
    }
    
    return state;
}

const store = createStore(postReducer);

store.dispatch(action);

console.log("default:",store.getState());

