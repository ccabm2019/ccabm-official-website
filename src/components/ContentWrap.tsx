import React from 'react'

type Props = {
  children?: React.ReactNode
}

export const ContentWrap: React.FC<Props> = ({ children }) => (
  <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>
)

export default ContentWrap
