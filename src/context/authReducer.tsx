import { AuthState } from './AuthContext';

export type AuthAction = { type: 'signIn' };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return { ...state, isLoggedIn: true, username: 'not-name' };
    default:
      return state;
  }
};
