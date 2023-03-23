/* eslint-disable no-unused-vars */
import { CyclesDTO } from '@dtos/cycles';

export interface CyclesContextProps {
  cycles: CyclesDTO[];
  activeCycle: CyclesDTO | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (task: string, minutesAmount: number) => void;
  interruptCurrentCycle: () => void;
}

export interface CyclesProviderProps {
  children: React.ReactNode;
}
