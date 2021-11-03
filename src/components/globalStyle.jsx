import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: #111;
    outline:none;
    text-decoration:none;
    box-sizing: border-box;
  }
  
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: #EEE;
  }

  body::-webkit-scrollbar {
    width: 12px;              
  }

  body::-webkit-scrollbar-track {
      background: none;    
      border-radius: 20px;   
  }

  body::-webkit-scrollbar-thumb {
      background-color: #141416;    
      border-radius: 20px;      
      border: 3px solid #191A1F;  
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    padding: 10px 0px;
    height: 100%;
    width: 100%;
  }
`