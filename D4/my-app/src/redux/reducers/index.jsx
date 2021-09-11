import { combineReducers } from 'redux';
import jokes from './jokes';

const rootReducers = combineReducers({ jokes });
export default rootReducers;