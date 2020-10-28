import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Select, Input } from '../inputs';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { IconButton, Button } from '../buttons'
import { SearchOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Form = styled.form`
  background-color: ${props => props.theme.main.primaryColor};
  width: 100%;
  padding: 8.5vh 0;
`

export default () => {
  return(
    <Fragment>
      <Form onSubmit={e=> e.preventDefault()}>
        <Container>
          <Row justify="center">
            <Col xs={12} md={6}>
              <Input
                placeholder="Ingrese el código de la propiedad"
              />        
            </Col>            
            <Col xs={12} md={3}>
              <IconButton
                icon={SearchOutlined}
              >
                Buscar
              </IconButton>
            </Col>
          </Row>
        </Container>
      </Form>
    </Fragment>
  )
}