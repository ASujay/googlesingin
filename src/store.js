import { createStore } from '@reduxjs/toolkit';
import rootReducer from './app/reducers/rootReducer';

export const store = createStore(rootReducer)
