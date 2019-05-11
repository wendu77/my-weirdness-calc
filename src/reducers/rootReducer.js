import { combineReducers } from 'redux';
import ui from './ui.reducer';
import liked from './liked.reducer';
import result from './result.reducer';
import search from './search.reducer';

export default combineReducers({
    ui,
    liked,
    result,
    search
});