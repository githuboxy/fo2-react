import { combineReducers } from 'redux';

import { authentication } from '../user/reducers/authentication.reducer';
import { registration } from '../user/reducers/registration.reducer';
import { users } from '../user/reducers/users.reducer';
import { alert } from '../common/reducers/alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;