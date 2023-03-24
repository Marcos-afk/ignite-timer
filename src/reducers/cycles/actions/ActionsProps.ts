import { CyclesDTO } from '@dtos/cycles';

/* eslint-disable no-unused-vars */
export enum ActionsTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export type ActionTypesProps =
  | { type: ActionsTypes.ADD_NEW_CYCLE; payload: { cycle: CyclesDTO } }
  | { type: ActionsTypes.INTERRUPT_CURRENT_CYCLE }
  | { type: ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED };
