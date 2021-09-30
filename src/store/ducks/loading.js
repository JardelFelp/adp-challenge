import { createReducer, createActions } from 'reduxsauce'

/* Initial State */
export const INITIAL_STATE = {
  active: false,
}

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  setLoading: ['active'],
})

export const LoadingType = Types
export default Creators

/* Methods */
setLoading = (state = INITIAL_STATE, { active }) => ({
  ...state,
  active,
})

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
})
