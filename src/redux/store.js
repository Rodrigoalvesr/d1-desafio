import { createStore } from 'redux';
import journey from './reducers/journey';

export const store = createStore(journey);
