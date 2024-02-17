import React from 'react'
import { cn } from '@/src/utils/cn'

export const Heading3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...headingProps}) => {
        return <h3 {...headingProps} className={cn(className)}>{children}</h3>
}