import { CyclesDTO } from '@dtos/cycles';
import { createContext, useState } from 'react';
import { CyclesContextProps, CyclesProviderProps } from './CyclesContextProps';

export const CyclesContext = createContext<CyclesContextProps>({} as CyclesContextProps);

export const CyclesProvider = ({ children }: CyclesProviderProps) => {
  const [cycles, setCycles] = useState<CyclesDTO[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const createNewCycle = (task: string, minutesAmount: number) => {
    const id = String(new Date().getTime());
    const newCycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    };

    setCycles((cycles) => [...cycles, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
  };

  const interruptCurrentCycle = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() };
        } else {
          return cycle;
        }
      }),
    );
    setActiveCycleId(null);
  };

  const markCurrentCycleAsFinished = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      }),
    );
  };

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  return (
    <CyclesContext.Provider
      value={{
        amountSecondsPassed,
        cycles,
        activeCycle,
        activeCycleId,
        createNewCycle,
        markCurrentCycleAsFinished,
        interruptCurrentCycle,
        setSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};
