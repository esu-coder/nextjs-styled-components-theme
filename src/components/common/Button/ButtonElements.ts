import { BUTTON_VARIANTS } from "@/constants/enum";
import styled from "styled-components";

export const Container = styled.button<{ variant?: BUTTON_VARIANTS }>`
    font-size: 1rem;
    padding: 0.8em 2em;
    transition: background-color 0.5s;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    outline-color: transparent;


    background-color: ${({ variant }) =>
        variant === BUTTON_VARIANTS.Secondary
            ? `var(--secondary-button-bgcolor)`
            : `var(--primary-button-bgcolor)`};

    color: ${({ variant }) =>
        variant === BUTTON_VARIANTS.Secondary
            ? `var(--secondary-button-textcolor)`
            : `var(--primary-button-textcolor)`};
    
    &:hover {
        background-color: ${({ variant }) =>
        variant === BUTTON_VARIANTS.Secondary
            ? `var(--secondary-button-hovercolor)`
            : `var(--primary-button-hovercolor)`};
    }
`