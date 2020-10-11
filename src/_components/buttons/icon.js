import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  border-radius: 20px;
  background-color: transparent;
  height: 44px;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms ease;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
    background-color: #fff;
  }
`

export default (props) => {
  const { icon: Icon, children } = props;
  return(
    <Button {...props}>
      {children}
      <Icon style={{ marginLeft: 8 }} />
    </Button>
  )
}