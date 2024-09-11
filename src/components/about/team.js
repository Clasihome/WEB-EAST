import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { v1 as uuid } from 'uuid';

import { Section } from '../../styled-components';

const Title = styled.h2`
  color: gray;
  text-align: center;
  margin-bottom: 4rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  height: 100%;
  padding-bottom: 3rem;
  @media(min-width: 768px){
    padding: 0;
  }
`
const Avatar = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 2rem;
  border-radius: 50%;
`
const NoAvatar = styled.div`
  width: 160px;
  height: 160px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  user-select: none;
  span{
    font-size: .6rem;
  }
  //color: #fff;
`
const Info = styled.p`
  margin: 0;
  color: gray;
  font-weight: bold;
  font-size: 1.5rem;
`
const Resume = styled.p`
  flex: 1;
  width: 90%;
  text-align: justify;
  font-style: italic;
`;
const User = ({ avatar, cv1, cv2, cv3, email, fullName, phone }) => (
  <Card>
    {
      avatar
      ?<Avatar src={avatar} alt={fullName} />
      :<NoAvatar>{fullName}<span>Sin avatar</span></NoAvatar>
    }
    <Info>{fullName}</Info>
    <Info>{email}</Info>
    <br></br>
    <Resume>
      {cv1}
    </Resume>
    <Resume>
      {cv2}
    </Resume>
    <Resume>
      {cv3}
    </Resume>
    
   
  </Card>
)

export default ()=> {
  const state = useContext(context);
  return(
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              Quienes somos
            </Title>
          </Col>
          {
            state.about.team.items.map(item => (
              <Col key={uuid()} xs={12} >
                <User {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Section>
  )
}