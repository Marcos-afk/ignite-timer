import * as Styled from './styles';
import { Play } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { defaultValuesHomeForm } from './defaultValues';
import { zodResolver } from '@hookform/resolvers/zod';
import { HomeFormSchema, HomeFormProps } from './schemas';

export const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<HomeFormProps>({
    defaultValues: defaultValuesHomeForm,
    resolver: zodResolver(HomeFormSchema),
  });

  const handleCreateNewCycle = (data: HomeFormProps) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <Styled.HomeContainer>
      <form>
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styled.TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome ao seu projeto"
            list="task-suggestions"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <Styled.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>Minutos</span>
        </Styled.FormContainer>

        <Styled.CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.CountDownContainer>

        <Styled.StartCountDownButton type="submit" onClick={handleSubmit(handleCreateNewCycle)} disabled={!isValid}>
          <Play size={24} /> Começar
        </Styled.StartCountDownButton>
      </form>
    </Styled.HomeContainer>
  );
};
