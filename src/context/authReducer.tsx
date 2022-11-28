import { authInitialState, AuthState } from './AuthContext';

export type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFavIcon'; payload: string }
  | { type: 'changeUsername'; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return { ...state, isLoggedIn: true, username: 'not-name' };
    case 'logout':
      return {
        ...state,
        ...authInitialState,
      };
    case 'changeFavIcon':
      return { ...state, favoriteIcon: action.payload };
    case 'changeUsername':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
