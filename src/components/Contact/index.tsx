import React from 'react';
import { FiHome, FiMail, FiPhone } from 'react-icons/fi';

import { Container } from './styles';

interface ContactProps {
  title: string;
  address: string;
  emailAddress: string;
  phone: string;
}

const Contact: React.FC<ContactProps> = ({
  title,
  address,
  emailAddress,
  phone,
}) => {
  return (
    <Container>
      <h1>{title}</h1>

      <div>
        <FiHome size={20} />
        <p>{address}</p>
      </div>

      <div>
        <FiMail size={20} />
        <p>{emailAddress}</p>
      </div>

      <div>
        <FiPhone size={20} />
        <p>{phone}</p>
      </div>
    </Container>
  );
};

export default Contact;
