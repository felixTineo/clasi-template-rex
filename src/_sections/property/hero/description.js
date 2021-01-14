import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import { truncate } from '../../../_util';
import { EnvironmentOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  //background-color: #fff;
  min-height: 100%;
  @media(min-width: 768px){
    padding: 2rem .75rem;
    padding-left: 0;
  }
`
const OperationCode = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
  color: ${props => props.theme.main.primaryColor};
`
const Price = styled(Title)`
  color: ${props => props.theme.main.primaryColor};
`
const UbicationCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  //border-radius: 6px;
  align-items: flex-start;
  //font-weight: bold;
  color: #fff;
  margin-bottom: 2rem;
  background-color: ${props => props.theme.main.primaryColor};
  /*box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);*/
  @media(min-width: 768px){
    margin-bottom: 0;
  }
`
const EviromentCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SvgCont = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
  color: #fff;
`


export default ({ description })=> {

  return(
    <MainCont>
      <Row>
        <Col xs ={12}>
          <Title>
            {truncate(description.title, 70)}
          </Title>
          <Price>
            {`${description.currency} ${description.value}`}
          </Price>
          <UbicationCont>
            <OperationCode>
              {`${description.operation} - COD.: ${description.code}`}
            </OperationCode>            
            <EviromentCont>
              <SvgCont>
                <EnvironmentOutlined />
              </SvgCont>
              <span>
                {description.ubication.commune}
              </span>
            </EviromentCont>
          </UbicationCont>
        </Col>
      </Row>
    </MainCont>
  )
}