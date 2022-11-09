import { combineReducers } from 'redux';
import {
    boardReducers,
    boardActions,
} from './sample';

const rootReducer = combineReducers({
    board: boardReducers,
});

export default rootReducer;
export const rootAction = {
    boardActions,
};
