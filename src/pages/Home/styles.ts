import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;



  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

`;

export const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-100']};

`;

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${({ theme }) => theme['green-500']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }

  &:disabled {
    opacity: 70%;
    cursor: not-allowed;
  }
`;

export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${({ theme }) => theme['red-500']};


  &:not(:disabled):hover {
    background: ${({ theme }) => theme['red-700']};
  }

`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};


  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
