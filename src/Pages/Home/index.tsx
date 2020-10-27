import React from 'react';

import Menu from '../../components/Menu';
import Footbar from '../../components/Footbar';

import homePageImg from '../../assets/img/perfil_capa.png';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <img src={homePageImg} alt="Foto HomePage Capa" />
      </Content>
      <Footbar />
    </Container>
  );
};

export default Home;
