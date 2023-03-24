import { CyclesDTO } from '@dtos/cycles';

export interface CyclesReducerStateProps {
  cycles: CyclesDTO[];
  activeCycleId: string | null;
}
