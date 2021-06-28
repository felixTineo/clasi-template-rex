import styled from 'styled-components';

export default styled.input`
  background-color: transparent;
  //box-shadow: 0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12);
  border-radius: 20px;
  padding: 5px;
  padding-left: 1rem;
  height: 44px;
  width: 100%;
  border: none;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.primary ? props.theme.main.primaryColor : "#fff"};
  color: ${props => props.primary ? props.theme.main.primaryColor : "#fff"};
  @media(min-width: 768px){
    margin-bottom: ${props => props.vertical ? "2rem" : "2rem"};
    box-shadow: ${props => props.shadow ? "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)" : "none"};
  }
  &::placeholder{
    color: ${props => props.primary ? props.theme.main.primaryColor : "#fff"};
  }  
`