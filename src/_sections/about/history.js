import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-grid-system';

const MainCont = styled.section`
  padding: 4rem 0;
  //min-height: 100vh;
  background-color: ${props => props.theme.main.primaryColor};
`
const HistoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  color: #fff;
`
const Title = styled.h2`
  color: #fff;
`
const Description = styled.div`

`
const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 448px;
  height: 388px;
`


export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <HistoryCont>
              <Title>
                {state.history.title}
              </Title>
              <Description dangerouslySetInnerHTML={{__html: state.history.description}} />
            </HistoryCont>
          </Col>                    
          <Hidden xs>
            <Col md={6}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Image src="/history-image.jpg" alt="historia" />
              </div>
            </Col>
          </Hidden>                    
        </Row>
      </Container>
    </MainCont>
  )
}