import React from 'react'
import { cn } from '@/src/utils/cn'

export const Heading4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...headingProps}) => {
        return <h4 {...headingProps} className={cn(className)}>{children}</h4>
}