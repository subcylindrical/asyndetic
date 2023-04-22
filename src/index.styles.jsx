import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background: ${(props) => props.dark || 'white'};
}`;
