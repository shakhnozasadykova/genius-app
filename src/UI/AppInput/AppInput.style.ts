import styled, { css } from "styled-components";

export const StyledInput = styled.input<{ $isError: boolean }>`
    outline: 0;
    font-family: inherit;
    padding: 12px 15px;
    background-color: #363636;
    border-color: #555;
    border-radius: 10px;
    color: #ccc;
    border: 2px;
    width: 100%;
    margin-bottom: 20px;

    ${(props) =>
    props.$isError &&
    css`
      border-color: red;
    `}
`

export const AppInputErrorText = styled.span`
    display: block;
    margin-top: 4px;
    margin-bottom: 20px;
    color: red;
    text-align: left;
`