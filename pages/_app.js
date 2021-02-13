import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import { useRouter } from 'next/router'
import StoreProvider from 'store/StoreProvider'
import { useState ,useEffect} from 'react';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [pageTitle,setPageTitle] = useState(null)
  
  const getPageTitle = () =>{
    switch (router.pathname) {
      case '/about':
        setPageTitle('about me')
        break;
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
            <Component {...pageProps} pageTitle={pageTitle}/>
          </StoreProvider>
        )
}

export default MyApp
