import { useCycles } from '@hooks/useCycles';
import { differenceInSeconds } from 'date-fns';
import { useEffect } from 'react';
import * as Styled from './styles';

export const CountDown = () => {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useCycles();

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
        const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate);

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
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Pomodoro`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <Styled.CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Styled.Separator>:</Styled.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </Styled.CountDownContainer>
  );
};
