import React from 'react'
import { cn } from '@/src/utils/cn'

export const Heading2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...headingProps}) => {
        return <h2 {...headingProps} className={cn(className)}>{children}</h2>
}