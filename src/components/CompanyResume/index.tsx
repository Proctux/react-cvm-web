import React from 'react';

import { Container } from './styles';

interface CompanyResumeProps {
  title: string;
}

const CompanyResume: React.FC<CompanyResumeProps> = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>

      <p>{children}</p>
    </Container>
  );
};

export default CompanyResume;
