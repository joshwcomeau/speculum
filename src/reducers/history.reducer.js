import {APPLY_TRANSFORMATION, UNDO_TRANSFORMATION} from '../actions';

const initialState = [];

// This reducer holds an array of canvases.
// Each canvas holds the image at that point in time.
// TODO: Implement a max-undo-state, to avoid consuming too much memory on
// mobile devices.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APPLY_TRANSFORMATION: return [...state, action.canvas];
    case UNDO_TRANSFORMATION: return state.slice(0, -1);
    default: return state;
  }
}

// Selectors
export const getCurrentCanvas = state => (
  state.history[state.history.length - 1]
);

export const getCanUndo = state => state.history.length > 1;
