import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Select, Input, Autocomplete } from '../inputs';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { IconButton, Button } from '../buttons'
import { SearchOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Form = styled.form`
  background-color: ${props => props.theme.main.primaryColor};
  width: 100%;
  //padding: 8.5vh 0;
`

export default () => {
  return(
    <Fragment>
      <Form onSubmit={e=> e.preventDefault()}>
        <Container>
          <Row justify="center">
            <Col xs={12}>
              <Autocomplete
                id="stringSearch"
                onSelect={e => console.log(e)}
                selected={''}
                placeholder="Ingrese el código de la propiedad"
              />
            </Col>            
          </Row>
        </Container>
      </Form>
    </Fragment>
  )
}