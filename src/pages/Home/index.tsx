import * as Styled from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HandPalm, Play } from 'phosphor-react';
import { useCycles } from '@hooks/useCycles';
import { CountDown } from '@components/CountDown';
import { defaultValuesNewCycleForm } from './defaultValues';
import { NewCycleFormProps, NewCycleFormSchema } from './schemas';

export const Home = () => {
  const { activeCycle, interruptCurrentCycle, createNewCycle } = useCycles();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<NewCycleFormProps>({
    defaultValues: defaultValuesNewCycleForm,
    resolver: zodResolver(NewCycleFormSchema),
  });

  const handleCreateNewCycle = ({ task, minutesAmount }: NewCycleFormProps) => {
    createNewCycle(task, minutesAmount);
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
            disabled={!!activeCycle}
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
            disabled={!!activeCycle}
          />
          <span>Minutos</span>
        </Styled.FormContainer>
        <CountDown />
        {activeCycle ? (
          <Styled.StopCountDownButton
            type="button"
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={24} /> Interromper
          </Styled.StopCountDownButton>
        ) : (
          <Styled.StartCountDownButton
            type="submit"
            onClick={handleSubmit(handleCreateNewCycle)}
            disabled={!isValid}
          >
            <Play size={24} /> Começar
          </Styled.StartCountDownButton>
        )}
      </form>
    </Styled.HomeContainer>
  );
};
