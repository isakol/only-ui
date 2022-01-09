import styled from 'styled-components';
import React from 'react';
import { colors } from 'theme';
import { transparentize } from 'polished';

export interface ButtonProps {
    disabled?: boolean;
    variant?: 'suggested' | 'destructive' | 'default';
    onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
    background-color: ${(props) => {
        switch (props.variant) {
            case 'destructive':
                return colors['red-3'];
            case 'suggested':
                return colors['blue-3'];
            default:
                return colors['light-2'];
        }
    }};
    border-radius: 5px;
    border: 0px;
    padding: 8px 16px;
    color: ${(props) => {
        switch (props.variant) {
            case 'destructive':
            case 'suggested':
                return colors['light-1'];
            default:
                return colors['dark-4'];
        }
    }};
    cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease 0s;
    user-select: none;
    outline: none;
    & :hover:not([disabled]) {
        background-color: ${(props) => {
            switch (props.variant) {
                case 'destructive':
                    return colors['red-4'];
                case 'suggested':
                    return colors['blue-4'];
                default:
                    return colors['light-3'];
            }
        }};
    }
    & :active:not([disabled]) {
        background-color: ${(props) => {
            switch (props.variant) {
                case 'destructive':
                    return colors['red-5'];
                case 'suggested':
                    return colors['blue-5'];
                default:
                    return colors['light-4'];
            }
        }};
    }
    & :focus:not([disabled]) {
        box-shadow: 0 0 0 0.2rem
            ${(props) => {
                return transparentize(0.2)(props.variant === 'destructive' ? colors['red-3'] : colors['blue-3']);
            }};
    }
`;

export const Button: React.FC<ButtonProps> = (props) => <StyledButton {...props} />;

Button.defaultProps = {
    disabled: false,
    variant: 'default',
};
