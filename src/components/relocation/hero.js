import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Section } from '../../styled-components';

const MainCont = styled(Section)`
  background-image: url("${require("../../images/mundo.png")}");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 70vh;
  margin-bottom: 2.5rem;
`;

export default ()=> {
  return(
    <MainCont>
      <Container>

      </Container>
    </MainCont>
  )
}