import { combineReducers } from 'redux';

import { authentication } from '../user/reducers/authentication.reducer';
import { registration } from '../user/reducers/registration.reducer';
import { users } from '../user/reducers/users.reducer';
import { navlinks } from '../navbar/reducers/navbar.reducer';
import { alert } from '../common/reducers/alert.reducer';
import { reportdata } from '../reports/reducers/report.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  navlinks,
  alert,
  reportdata
});

export default rootReducer;