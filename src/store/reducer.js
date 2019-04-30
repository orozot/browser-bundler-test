import {reducer as mainContentReducer} from "./compStore/mainContentStore";
import { combineReducers } from 'redux';

const reducer = combineReducers({
    mainContentReducer
})

export default reducer;
