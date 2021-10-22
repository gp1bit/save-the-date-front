import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #FFFF;
        --blue: #00a1d4;
        --graphite: #212121;
        --graphite-light: #2f2727;
        --black: #000;
        --green: #1FAE7B;
        --gray:#C4C4C4;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    //font-size: 16px (desktop)
    html{ 
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width:720px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, textarea, button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    button{ 
        cursor: pointer;
    }

    [disabled]{
        cursor: not-allowed;
        opacity: 8.6;
    }
`;
