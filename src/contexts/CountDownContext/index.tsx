import { useCycles } from '@hooks/useCycles';
import { differenceInSeconds } from 'date-fns';
import { createContext, useEffect } from 'react';
import {
  CountDownContextProps,
  CountDownProviderProps,
} from './CountDownContextProps';

export const CountDownContext = createContext({} as CountDownContextProps);

export const CountDownProvider = ({ children }: CountDownProviderProps) => {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useCycles();

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Pomodoro`;
    }

    if (!activeCycle) {
      document.title = 'Ignite Timer';
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
};
