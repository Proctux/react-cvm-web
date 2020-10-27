import React from 'react';

import Contact from '../Contact';
import CompanyResume from '../CompanyResume';
import About from '../About';

import { Container, Footer, FooterContent } from './styles';

const Footbar: React.FC = () => {
  return (
    <Container>
      <Footer>
        <FooterContent>
          <CompanyResume title="A CVM">
            Entidade filantrópica assistencial sem fins lucrativos, declarada de
            utilidade pública pelo Governo Municipal, Estadual e Federal, esta
            registrada no Conselho Nacional de Assistência Social e possui
            Certificado de Filantropia.
          </CompanyResume>

          <About title="Sobre" />

          <Contact
            title="Endereço / Contato"
            address="R. Otto Júlio Malina, 1306 - Ipiranga, São José - SC, 88111-500"
            emailAddress="comunicacaosocialcvm@floripa.com.br"
            phone="(48) 3357-9400"
          />
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Footbar;
