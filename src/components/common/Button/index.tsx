"use client"

import { BUTTON_VARIANTS } from '@/constants/enum'
import React from 'react'
import { Container } from './ButtonElements'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: BUTTON_VARIANTS
}

function Button({ children, variant }: ButtonProps) {
    return (
        <Container variant={variant}>
            {children}
        </Container>
    )
}

export default Button