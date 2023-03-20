import * as Styled from './styles';
import { Play } from 'phosphor-react';

export const Home = () => {
  return (
    <Styled.HomeContainer>
      <form action="#">
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styled.TaskInput type="text" id="task" placeholder="Dê um nome ao seu projeto" />

          <label htmlFor="minutesAmount">Durante</label>
          <Styled.MinutesAmountInput type="number" id="minutesAmount" placeholder="00" />
          <span>Minutos</span>
        </Styled.FormContainer>

        <Styled.CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.CountDownContainer>

        <Styled.StartCountDownButton type="submit" disabled>
          <Play size={24} /> Começar
        </Styled.StartCountDownButton>
      </form>
    </Styled.HomeContainer>
  );
};
