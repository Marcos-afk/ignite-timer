import * as Styled from './styles';
import { NavLink } from 'react-router-dom';
import LogoIgniteSvg from '@assets/logo-ignite.svg';
import { Timer, Scroll } from 'phosphor-react';

export const Header = () => {
  return (
    <Styled.HeaderContainer>
      <img src={LogoIgniteSvg} alt="Logo principal da aplicação" />
      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Styled.HeaderContainer>
  );
};
