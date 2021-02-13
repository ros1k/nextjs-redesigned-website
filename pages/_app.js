import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import StoreProvider from 'store/StoreProvider'
function MyApp({ Component, pageProps }) {
  return (
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        )
}

export default MyApp
