import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Section } from '../../styled-components';

const MainCont = styled(Section)`
  background-image: url("${require("../../images/hero-sales.webp")}");
  background-size: cover;
  min-height: 100vh;
  margin-bottom: 2.5rem;
`

export default ()=> {
  return(
    <MainCont>
      <Container>

      </Container>
    </MainCont>
  )
}