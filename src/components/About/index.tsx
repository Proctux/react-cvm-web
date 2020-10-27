import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface AboutProps {
  title: string;
}

const About: React.FC<AboutProps> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>

      <div>
        <Link to="/">Projetos</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Noticias</Link>
        <Link to="/">Transparência</Link>
        <Link to="/">Agenda</Link>
      </div>
    </Container>
  );
};

export default About;
