import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children?: ReactNode
}

const Container: React.FC = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="flex justify-center bg-slate-200 pt-32">
        <div className="min-h-screen max-w-sm sm:max-w-2xl lg:max-w-5xl">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Container
