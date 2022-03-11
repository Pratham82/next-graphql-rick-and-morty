import { ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
}

const Container: React.FC = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen justify-center bg-slate-200">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
}

export default Container
