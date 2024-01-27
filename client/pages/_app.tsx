import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import NextNProgress from 'nextjs-progressbar'
//import { withHydrate } from '@effector/next';

//const enhance = withHydrate()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress/>
      <Component {...pageProps} />
      <ToastContainer
          position='bottom-right'
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          limit={1}
          theme='light' />
    </>
  
  )

}
