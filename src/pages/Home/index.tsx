import * as Styled from './styles';
import { Play } from 'phosphor-react';

export const Home = () => {
  return (
    <Styled.HomeContainer>
      <form action="#">
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styled.TaskInput type="text" id="task" placeholder="Dê um nome ao seu projeto" list="task-suggestions" />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <Styled.MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60} />
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
