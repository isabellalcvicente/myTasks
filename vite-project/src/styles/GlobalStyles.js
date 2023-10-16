import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const GlobalStyle=createGlobalStyle`
    *{
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    }
`

export const Container=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 24px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`

export const Input=styled.input`
    padding: 8px,24px;
    width: 100%;
    height: 50px;
    background: #ffffff;
    box-shadow: 4px;
    border-radius: 8px;
    border: none;
`

export const Flex=styled.div`
    display: flex;
    flex-direction:${(props)=> props.direction || 'column'} ;
    justify-content: ${(props)=> props.justify || 'center'} ;;
    align-items: ${(props)=> props.align || 'center'} ;
    gap: ${(props)=> props.gap || '16px'};
`

export const Spacer=styled.div`
    width: 100%;
    margin:${(props)=> props.margin || '20px'};
    
`

export const Button=styled.button`
    color: black;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

`

export const Item = styled.li`
  display: flex;
  padding: 8px 24px;
  width: 350px;
  height: 50px;
  background: ${(props) => (props.check ? "#da2535" : "#FFFFFF")};
  border-radius: 8px;
  box-shadow: 0px 4px;
  border-radius: 8px;
  list-style: none;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 500;
    color: black; 
    font-size: 16px;
    line-height: 24px;
  }

  button {
    
    color: black;
    background-color: transparent;
    cursor: pointer;
  }
  i {
    background-color: white;
    width: 100%;
    height: 50px;
    font-size: 24px;
    color: ${(props) => (props.check ? "red" : "green")};
  }
`
