import * as Actions from '@reducers/cycles/actions';
import { version } from '../../../package.json';
import { createContext, useEffect, useReducer, useState } from 'react';
import { cyclesReducer } from 'src/reducers/cycles';
import { CyclesContextProps, CyclesProviderProps } from './CyclesContextProps';
import { differenceInSeconds } from 'date-fns';

export const CyclesContext = createContext<CyclesContextProps>(
  {} as CyclesContextProps,
);

export const CyclesProvider = ({ children }: CyclesProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const stateJson = localStorage.getItem(
        `@ignite-timer:cycles-state-${version}`,
      );
      if (stateJson) {
        return JSON.parse(stateJson);
      }

      return {
        cycles: [],
        activeCycleId: null,
      };
    },
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  const createNewCycle = (task: string, minutesAmount: number) => {
    const id = String(new Date().getTime());
    const newCycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    };

    dispatch(Actions.addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  };

  const interruptCurrentCycle = () => {
    dispatch(Actions.interruptCurrentCycleAction());
  };

  const markCurrentCycleAsFinished = () => {
    dispatch(Actions.markCurrentCycleAsFinishedAction());
  };

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  useEffect(() => {
    const stateJson = JSON.stringify(cyclesState);
    localStorage.setItem(`@ignite-timer:cycles-state-${version}`, stateJson);
  }, [cyclesState]);

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
