import {taskReducer} from '../Reducer/TaskReducer';
import {createStore} from 'redux';
  
export const store = createStore(taskReducer);