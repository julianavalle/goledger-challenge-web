import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        min-height: 100%;
        background: var(---primary);
    }

    *, buttun, input{
        border: 0;
        background: none;
        font-family: Poppins;
        color: var();
    }

    ul{
        list-style: none;
    }

    :root{
        --primary: #fff;
        
        --black: #1B202C;
        --gray: #4B5567;

        --blue: #18B8D6;
        --blue-light: #2CD3F8;

        --green: #A3D92E;
        --green-light: #b4f132;

        --pink-light: #F9E0EB;
        --pink: #D53277;

        --red: #B70202;
    }
`;