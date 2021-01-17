import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Search from './search';

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: Search,
  });
