import React from 'react'
import { cn } from '@/src/utils/cn'

export const Heading1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...headingProps}) => {
        return <h1 {...headingProps} className={cn(className)}>{children}</h1>
}