import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
  return (
    <Styled.LayoutContainer>
      <Header />
      <Outlet />
    </Styled.LayoutContainer>
  );
};
