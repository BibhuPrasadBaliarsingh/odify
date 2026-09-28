import type { ElementType, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  )
}
