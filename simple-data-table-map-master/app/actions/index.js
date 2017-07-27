import { TOGGLE_DIRECTION } from '../constants/ActionTypes';

export function toggleDirection(newSortKey) {
  return { type: TOGGLE_DIRECTION, newSortKey };
}
