import { produce } from 'immer';
import { ActionsTypes, ActionTypesProps } from './actions/ActionsProps';
import { CyclesReducerStateProps } from './CyclesReducerProps';

export const cyclesReducer = (
  state: CyclesReducerStateProps,
  action: ActionTypesProps,
) => {
  switch (action.type) {
    case ActionsTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.cycle);
        draft.activeCycleId = action.payload.cycle.id;
      });

    case ActionsTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }

    case ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }

    default:
      return state;
  }
};
