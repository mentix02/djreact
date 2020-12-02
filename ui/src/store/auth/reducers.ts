import { LOGIN, LOGOUT, AuthState, AuthActionType } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    case LOGIN:
      return {
        isAuthenticated: true,
        token: action.payload.token,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default authReducer;
