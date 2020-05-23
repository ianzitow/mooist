import {SET_PERMISSION_STATUS} from '../actions';

const permissionReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PERMISSION_STATUS:
      return {status: action.status};
    default:
      return state;
  }
};

export default permissionReducer;
