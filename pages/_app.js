import '../styles/globals.css'
import StoreProvider from 'helpers/StoreProvider'
function MyApp({ Component, pageProps }) {
  return (
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        )
}

export default MyApp
