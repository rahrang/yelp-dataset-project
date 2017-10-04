import { MainConstants } from '../actions/main-actions';

const defaultState = {
  compliments: {},
  years_to_elite: {},
  reviews: {},
  users: {}
};

const MainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MainConstants.STORE_DATA:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default MainReducer;
