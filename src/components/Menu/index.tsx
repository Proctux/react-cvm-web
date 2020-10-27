import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/LOGO CVM.png';

import { Container, Header, HeaderContent } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Cvm Logo" />

          <div>
            <Link to="/">CVM</Link>
            <Link to="/">Acolhimento Institucional</Link>
            <Link to="/">Educação Infantil</Link>
            <Link to="/">Centro de Atendimento Social</Link>
            <Link to="/">Noticias</Link>
            <Link to="/">Transparência</Link>
          </div>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Menu;
