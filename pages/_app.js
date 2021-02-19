import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import { useRouter } from 'next/router'
import StoreProvider from 'store/StoreProvider'
import { useState ,useEffect} from 'react';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [pageTitle,setPageTitle] = useState(null)
  
  const getPageTitle = () =>{
    switch (router.pathname) {
      case '/portfolio':
        setPageTitle('portfolio')
        break;
      case '/contact':
        setPageTitle('contact')
        break;
      default:
        return null;
        break;
    }
  }
  useEffect(() => {
    getPageTitle()
  }, [router.pathname])
  return (
    <StoreProvider>
      <AnimatePresence initial={false}  exitBeforeEnter>
        
          <Component {...pageProps} pageTitle={pageTitle}/>
      
      </AnimatePresence>
    </StoreProvider>
        )
}

export default MyApp
