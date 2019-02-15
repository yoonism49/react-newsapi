import { combineReducers } from "redux";
import categoryReducer from './categoryReducer';
import newsReducer from './newsReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  categoryReducer,
  newsReducer,
  tokenReducer
});
