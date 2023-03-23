import { CyclesContext } from '@contexts/CyclesContext';
import { useContext } from 'react';

export const useCycles = () => {
  return useContext(CyclesContext);
};
