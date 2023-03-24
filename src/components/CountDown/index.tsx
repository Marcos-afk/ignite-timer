import * as Styled from './styles';
import { useCountDown } from '@hooks/useCountDown';

export const CountDown = () => {
  const { minutes, seconds } = useCountDown();
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
