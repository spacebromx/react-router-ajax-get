import { combineReducers } from 'redux';

import BreedsReducer from './BreedsReducer';
import DogDetailsReducer from './DogDetailsReducer';

const rootReducer = combineReducers({
    breeds: BreedsReducer,
    dogDetails: DogDetailsReducer
});

export default rootReducer;
