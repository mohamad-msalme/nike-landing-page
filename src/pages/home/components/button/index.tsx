import React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...btnProps}) => {
        return (
                <button {...btnProps}>{children}</button>
        )
}