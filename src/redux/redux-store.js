import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer';


let redusers = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});


let store = createStore(redusers)

window.store = store;

export default store;
