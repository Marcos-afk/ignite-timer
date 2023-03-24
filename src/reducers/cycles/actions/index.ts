import { CyclesDTO } from '@dtos/cycles';
import { ActionsTypes, ActionTypesProps } from './ActionsProps';

export const addNewCycleAction = (cycle: CyclesDTO): ActionTypesProps => {
  return {
    type: ActionsTypes.ADD_NEW_CYCLE,
    payload: { cycle },
  };
};

export function markCurrentCycleAsFinishedAction(): ActionTypesProps {
  return {
    type: ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAction(): ActionTypesProps {
  return {
    type: ActionsTypes.INTERRUPT_CURRENT_CYCLE,
  };
}
