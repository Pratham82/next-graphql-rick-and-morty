import Image from 'next/image'
import Github from '../public/svg/Github'
import LinkedIn from '../public/svg/LinkedIn'
import Twitter from '../public/svg/Twitter'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-0 w-screen border-t border-slate-300 bg-slate-400/50 backdrop-blur-xl">
      <div className="mt-2 flex h-10 w-full items-end justify-center ">
        <div className="mx-2">
          <a
            href="https://github.com/pratham82"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
        <div className="mx-2">
          <a
            href="https://www.linkedin.com/in/prathameshmali/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
        <div className="mx-2">
          <a
            href="https://www.twitter.com/pratham_82 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </div>
      </div>
      <div className="flex h-14 w-full items-center justify-center ">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </div>
    </footer>
  )
}
