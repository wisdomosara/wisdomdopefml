import { combineReducers } from 'redux';
import { userReducer, uiReducer,fundeeReducer,dataReducer,blogReducer, getCampaignReducers } from './allReducers';

const rootreducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
  fundee:fundeeReducer,
  blog:blogReducer,
  campaigns: getCampaignReducers
});

export default rootreducer;