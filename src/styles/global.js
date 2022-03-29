import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
;
 

    }
    button {
        border:none;
        cursor: pointer;
    }
    body {
        width: 100%;
        height: 100vh;
    }
    
    `;
