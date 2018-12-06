import { combineReducers } from 'redux';

import { authentication } from '../user/reducers/authentication.reducer';
import { registration } from '../user/reducers/registration.reducer';
import { users } from '../user/reducers/users.reducer';
import { navlinks } from '../navbar/reducers/navbar.reducer';
import { alert } from '../common/reducers/alert.reducer';
import { reportdata,reportdatatable } from '../reports/reducers/report.reducer';
import { tradedata,tradereviewdata,tradeconfirmdata } from '../tradeentry/reducers/trade.reducer';
 
const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  navlinks,
  alert,
  reportdata,
  reportdatatable,
  tradedata,
  tradereviewdata,
  tradeconfirmdata
});

export default rootReducer;